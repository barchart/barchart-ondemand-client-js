'use strict';

import axios from 'axios';

/**
 *
 * Barchart OnDemand client for Javascript.
 *
 * Created by Mike Ehrenberg on 10/21/2014.
 *
 * JSONP function from https://github.com/larryosborn/JSONP
 *
 */

export class OnDemandClient {

    constructor(builder) {
        this.config = {
            baseUrl: 'https://ondemand.websol.barchart.com',
            apiKey: null,
            useJsonP: true,
            debug: false,
            sandbox: false
        };

        Object.assign(this.config, builder);
    }

    getQuote(options) {
        return new Promise((resolve, reject) => {
            const requestData = {
                url: this.config.baseUrl + '/getQuote.' + this.format()
            };

            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject)
        });
    };

    getLeaders(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getLeaders.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getTechnicals(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getTechnicals.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getProfile(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getProfile.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getInstrumentDefinition(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getInstrumentDefinition.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getFuturesSpecifications(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFuturesSpecifications.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getFuturesExpirations(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFuturesExpirations.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };


    getFuturesOptionsExpirations(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFuturesOptionsExpirations.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    }

    getCompetitors(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getCompetitors.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    }


    getInsiders(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getInsiders.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    }

    getHighsLows(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getHighsLows.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getMomentum(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getMomentum.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getSignal(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getSignal.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getRatings(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getRatings.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getChart(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getChart.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getHistory(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getHistory.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getFuturesOptions(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFuturesOptions.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getEquityOptions(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getEquityOptions.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getSpecialOptions(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getSpecialOptions.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getSpecialOptionsClassification(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getSpecialOptionsClassification.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getWeather(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getWeather.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getUSDAGrainPrices(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getUSDAGrainPrices.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getEarningsEstimates(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getEarningsEstimates.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getCorporateActions(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getCorporateActions.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getIndexMembers(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getIndexMembers.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getFinancialHighlights(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFinancialHighlights.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getIncomeStatements(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getIncomeStatements.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getFinancialRatios(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getFinancialRatios.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getSECFilings(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getSECFilings.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getETFDetails(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getETFDetails.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getSymbolLookup(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getSymbolLookUp.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getNews(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getNews.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getBalanceSheets(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getBalanceSheets.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    getClosePrice(options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/getClosePrice.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    get(call, options) {
        return new Promise((resolve, reject) => {
            var requestData = {
                url: this.config.baseUrl + '/' + call + '.' + this.format()
            };
            this._checkParamsAndFetch(requestData, options).then(resolve).catch(reject);
        });
    };

    format() {
        if (this.config.useJsonP) {
            return 'jsonp';
        } else {
            return 'json';
        }
    };

    _keyFormat() {
        if (this.config.sandbox) {
            return 'key';
        } else {
            return 'apikey';
        }
    };

    _checkParamsAndFetch(requestData, options) {
        requestData.params = Object.assign({}, options);

        /* attach key to request */
        if (this.config.apiKey) {
            requestData.params[this._keyFormat()] = this.config.apiKey;
        }

        return this._doFetch(requestData);
    };

    _doFetch(requestData) {
        const url = this._buildUrl(requestData.url, requestData.params);
        return new Promise((resolve, reject) => {
            if (this.config.useJsonP) {

                if (!this.jsonp) {
                    this.jsonp = new JSONP();
                }

                this.jsonp.fetch({
                    url: url,
                    success: (data) => {
                        if (this.debug) {
                            console.log('success', data);
                        }
                        resolve(data);
                    },
                    error: (query) => {
                        console.log('fetch error', query);
                        reject(query)
                    }
                });
            } else {
                axios.get(url)
                    .then((response) => {
                        if (this.debug) {
                            console.log('success', response);
                        }
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log('fetch error', error);
                        reject(error)
                    });
            }
        })
    }

    _buildUrl(url, parameters) {
        var qs = '';
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                var value = parameters[key];
                qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1);
            url = url + '?' + qs;
        }
        return url;
    }

    setAPIKey(apiKey) {
        this.config.apiKey = apiKey;
        return this;
    }

    setJsonP(useJsonP) {
        this.config.useJsonP = useJsonP;
        return this;
    }

    setDebug(debug) {
        this.config.debug = debug;
        return this;
    }

    setBaseUrl(base) {
        this.config.baseUrl = base;
        return this;
    }

    setSandbox(sandbox) {
        this.config.sandbox = sandbox;
        if (sandbox) {
            this.config.baseUrl = 'http://marketdata.websol.barchart.com';
        } else {
            this.config.baseUrl = 'http://ondemand.websol.barchart.com';
        }
        return this;
    };
}

class JSONP {
    constructor() {
        //
    }

    fetch(options) {
        let callback, done, head, params, script;
        options = options ? options : {};
        params = {
            data: options.data || {},
            error: options.error || void 0,
            success: options.success || void 0,
            url: options.url || ''
        };
        if (params.url.length === 0) {
            throw new Error('MissingUrl');
        }
        done = false;
        callback = params.data[options.callback_name || 'callback'] = 'jsonpODJSClient_' + this.randomString(15);
        window[callback] = (data) => {
            params.success(data);
            try {
                return delete window[callback];
            } catch (_error) {
                window[callback] = void 0;
                return void 0;
            }
        };
        script = this.createElement('script');
        script.src = params.url;
        script.src += params.url.indexOf('?' === -1) ? '&' : '&';
        script.src += this.objectToUri(params.data);
        script.async = true;
        script.onerror = (evt) => {
            return params.error({
                url: script.src,
                event: evt
            });
        };
        script.onload = script.onreadystatechange = () => {
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
    }

    encode(val) {
        return window.encodeURIComponent(val);
    }

    createElement(tag) {
        return window.document.createElement(tag);
    }

    objectToUri(obj) {
        var data, key, value;
        data = [];
        for (key in obj) {
            value = obj[key];
            data.push(this.encode(key) + '=' + this.encode(value));
        }
        return data.join('&');
    }

    randomString(length) {
        var str;
        str = '';
        while (str.length < length) {
            str += Math.random().toString(36)[2];
        }
        return str;
    };
}