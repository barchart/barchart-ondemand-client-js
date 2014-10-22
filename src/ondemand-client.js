/**
 *
 * Barchart OnDemand client for Javascript.
 *
 * Created by Mike Ehrenberg on 10/21/2014.
 *
 * Modeled after https://github.com/JMPerez/spotify-web-api-js
 *
 */

var OnDemandClient = (function () {

    'use strict';

    var _baseUrl = "http://ondemand.websol.barchart.com";
    var _apiKey = null;
    var _promiseImplementation = null;
    var _wrapForCors = false;

    var Constr = function () {
        if (_wrapForCors) {
            var baseUrl = "http://localhost/utils/data-fetcher.php?url=" + _baseUrl;
            _baseUrl = baseUrl;
        }
    };

    Constr.prototype = {
        constructor: OnDemandClient
    };

    Constr.prototype.getQuote = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getQuote.json'
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    var _checkParamsAndFetch = function (requestData, options, callback) {
        var opt = {};
        var cb = null;

        if (typeof options === 'object') {
            opt = options;
            cb = callback;
        } else if (typeof options === 'function') {
            cb = options;
        }
        requestData.params = _extend(requestData.params, opt);

        /* attach key to request */

        if (_apiKey) {
            requestData.params['apikey'] = _apiKey;
        }

        return _doFetch(requestData, cb);
    };

    var _doFetch = function (requestData, callback) {
        var promiseFunction = function (resolve, reject) {
            var req = new XMLHttpRequest();
            var type = requestData.type || 'GET';

            if (type === 'GET') {
                req.open(type,
                    _buildUrl(requestData.url, requestData.params),
                    true);
            } else {
                req.open(type, _buildUrl(requestData.url));
            }

            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    var data = null;
                    try {
                        data = req.responseText ? JSON.parse(req.responseText) : '';
                    } catch (e) {
                    }

                    if (req.status === 200 || req.status === 201) {
                        if (resolve) {
                            resolve(data);
                        }
                        if (callback) {
                            callback(null, data);
                        }
                    } else {
                        if (reject) {
                            reject(req);
                        }
                        if (callback) {
                            callback(req, null);
                        }
                    }
                }
            };

            if (type === 'GET') {
                req.send(null);
            } else {
                req.send(JSON.stringify(requestData.postData));
            }
        };

        if (callback) {
            promiseFunction();
            return null;
        } else {
            return _promiseProvider(promiseFunction);
        }
    };

    var _extend = function () {
        var args = Array.prototype.slice.call(arguments);
        var target = args[0];
        var objects = args.slice(1);
        target = target || {};
        for (var i = 0; i < objects.length; i++) {
            for (var j in objects[i]) {
                target[j] = objects[i][j];
            }
        }
        return target;
    };

    var _buildUrl = function (url, parameters) {
        var qs = '';
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                var value = parameters[key];
                qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1); //chop off last '&'
            url = url + '?' + qs;
        }
        return url;
    };

    var _promiseProvider = function (promiseFunction) {
        if (_promiseImplementation !== null) {
            var deferred = _promiseImplementation.defer();
            promiseFunction(function (resolvedResult) {
                deferred.resolve(resolvedResult);
            }, function (rejectedResult) {
                deferred.reject(rejectedResult);
            });
            return deferred.promise;
        } else {
            if (window.Promise) {
                return new window.Promise(promiseFunction);
            }
        }
        return null;
    };

    /**
     * Sets the API key to be used.

     * @param {String} apiKey The API key
     */
    Constr.prototype.setAPIKey = function (apiKey) {
        _apiKey = apiKey;
    };

    /**
     * Sets an implementation of Promises/A+ to be used. E.g. Q, when.
     * See [Conformant Implementations](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md)
     * for a list of some available options
     * @param {Object} promiseImplementation A Promises/A+ valid implementation
     */
    Constr.prototype.setPromiseImplementation = function (promiseImplementation) {
        if (!('defer' in promiseImplementation)) {
            throw new Error('Unsupported implementation of Promises/A+');
        } else {
            _promiseImplementation = promiseImplementation;
        }
    };


    return Constr;

})();