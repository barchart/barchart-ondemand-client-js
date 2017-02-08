/*! barchart-ondemand-client-js - v1.0.0 - 2017-02-08
* https://github.com/barchart/barchart-ondemand-client-js
* Copyright (c) 2017 ; Licensed  */
/* global JSONP */

var OnDemandClient = (function () {

    'use strict';

    var _baseUrl = 'http://ondemand.websol.barchart.com';
    var _apiKey = null;
    var _promiseImplementation = null;
    var _useJsonP = true;
    var _debug = false;
    var _sandbox = false;

    var Constr = function () {

    };

    Constr.prototype = {
        constructor: OnDemandClient
    };

    Constr.prototype.getQuote = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getQuote.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getLeaders = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getLeaders.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getTechnicals = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getTechnicals.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getProfile = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getProfile.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getInstrumentDefinition = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getInstrumentDefinition.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getFuturesSpecifications = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFuturesSpecifications.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    /*
     * FIXME: Response should have a 'root' field in addition to 'symbol'
     * */
    Constr.prototype.getFuturesExpirations = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFuturesExpirations.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    /*
     * FIXME: This is not implemented and should return an error in requested format (eg. JSON or XML) not plain text
     * */
    Constr.prototype.getFuturesOptionsExpirations = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFuturesOptionsExpirations.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getCompetitors = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getCompetitors.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    /*
     * FIXME: This is not implemented and should return an error in requested format (eg. JSON or XML) not plain text
     * */
    Constr.prototype.getInsiders = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getInsiders.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getHighsLows = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getHighsLows.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getMomentum = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getMomentum.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getSignal = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getSignal.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getRatings = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getRatings.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getChart = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getChart.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getHistory = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getHistory.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getFuturesOptions = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFuturesOptions.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getEquityOptions = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getEquityOptions.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getSpecialOptions = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getSpecialOptions.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getSpecialOptionsClassification = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getSpecialOptionsClassification.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getWeather = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getWeather.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getUSDAGrainPrices = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getUSDAGrainPrices.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getEarningsEstimates = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getEarningsEstimates.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getCorporateActions = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getCorporateActions.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getIndexMembers = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getIndexMembers.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getFinancialHighlights = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFinancialHighlights.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getIncomeStatements = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getIncomeStatements.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getFinancialRatios = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getFinancialRatios.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getSECFilings = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getSECFilings.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getETFDetails = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getETFDetails.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getSymbolLookup = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getSymbolLookUp.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    /*
     * FIXME: OnDemand will not return more than one source (feed)
     * */
    Constr.prototype.getNews = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getNews.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.getBalanceSheets = function (options, callback) {
        var requestData = {
            url: _baseUrl + '/getBalanceSheets.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    Constr.prototype.get = function (call, options, callback) {
        var requestData = {
            url: _baseUrl + '/' + call + '.' + _format()
        };
        return _checkParamsAndFetch(requestData, options, callback);
    };

    //

    var _format = function () {
        if (_useJsonP) {
            return 'jsonp';
        } else {
            return 'json';
        }
    };

    var _keyFormat = function () {
        if (_sandbox) {
            return 'key';
        } else {
            return 'apikey';
        }
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
            requestData.params[_keyFormat()] = _apiKey;
        }

        return _doFetch(requestData, cb);
    };

    var _doFetch = function (requestData, callback) {

        if (_useJsonP === true) {

            JSONP({
                url: _buildUrl(requestData.url, requestData.params),
                success: function (data) {
                    if (_debug) {
                        console.log('success!', data);
                    }
                    if (callback) {
                        callback(null, data);
                    }
                },
                error: function (query) {
                    console.log('fetch error!', query);
                    if (callback) {
                        callback(query, null);
                    }
                }
            });

        } else {

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


    Constr.prototype.setAPIKey = function (apiKey) {
        _apiKey = apiKey;
        return this;
    };

    Constr.prototype.setJsonP = function (useJsonP) {
        _useJsonP = useJsonP;
        return this;
    };

    Constr.prototype.setDebug = function (debug) {
        _debug = debug;
        return this;
    };

    Constr.prototype.setBaseUrl = function (base) {
        _baseUrl = base;
        return this;
    };

    Constr.prototype.setSandbox = function (sandbox) {
        _sandbox = sandbox;
        if (_sandbox === true) {
            _baseUrl = 'http://marketdata.websol.barchart.com';
        } else {
            _baseUrl = 'http://ondemand.websol.barchart.com';
        }
        return this;
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

(function () {
    var JSONP, createElement, encode, noop, object_to_uri, random, random_string;

    createElement = function (tag) {
        return window.document.createElement(tag);
    };

    encode = window.encodeURIComponent;

    random = Math.random;

    JSONP = function (options) {
        var callback, done, head, params, script;
        options = options ? options : {};
        params = {
            data: options.data || {},
            error: options.error || noop,
            success: options.success || noop,
            url: options.url || ''
        };
        if (params.url.length === 0) {
            throw new Error('MissingUrl');
        }
        done = false;
        callback = params.data[options.callback_name || 'callback'] = 'jsonpODJSClient_' + random_string(15);
        window[callback] = function (data) {
            params.success(data);
            try {
                return delete window[callback];
            } catch (_error) {
                window[callback] = void 0;
                return void 0;
            }
        };
        script = createElement('script');
        script.src = params.url;
        script.src += params.url.indexOf('?' === -1) ? '&' : '&';
        script.src += object_to_uri(params.data);
        script.async = true;
        script.onerror = function (evt) {
            return params.error({
                url: script.src,
                event: evt
            });
        };
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                done = true;
                script.onload = script.onreadystatechange = null;
                if (script && script.parentNode) {
                    return script.parentNode.removeChild(script);
                }
            }
        };

        head = head || window.document.getElementsByTagName('head')[0];

        return head.appendChild(script);
    };

    noop = function () {
        return void 0;
    };

    random_string = function (length) {
        var str;
        str = '';
        while (str.length < length) {
            str += random().toString(36)[2];
        }
        return str;
    };

    object_to_uri = function (obj) {
        var data, key, value;
        data = [];
        for (key in obj) {
            value = obj[key];
            data.push(encode(key) + '=' + encode(value));
        }
        return data.join('&');
    };

    if ((typeof define !== 'undefined' && define !== null) && define.amd) {
        define(function () {
            return JSONP;
        });
    } else if ((typeof module !== 'undefined' && module !== null) && module.exports) {
        module.exports = JSONP;
    } else {
        this.JSONP = JSONP;
    }

}).call(this);