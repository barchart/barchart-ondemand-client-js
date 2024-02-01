"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/ondemand-client.ts
var ondemand_client_exports = {};
__export(ondemand_client_exports, {
  OnDemandClient: () => OnDemandClient
});
module.exports = __toCommonJS(ondemand_client_exports);
var import_axios = __toESM(require("axios"));

// src/jsonp.js
var head;
var JSONP = class {
  constructor() {
  }
  fetch(options = {}) {
    let params = {
      data: options.data || {},
      error: options.error || void 0,
      success: options.success || void 0,
      url: options.url || ""
    };
    if (params.url.length === 0) {
      throw new Error("MissingUrl");
    }
    let done = false;
    let callback = params.data[options.callback_name || "callback"] = "jsonpODJSClient_" + this.randomString(15);
    window[callback] = (data) => {
      params.success(data);
      try {
        return delete window[callback];
      } catch (_error) {
        window[callback] = void 0;
        return void 0;
      }
    };
    let script = this.createElement("script");
    script.src = params.url;
    script.src += params.url.indexOf("?" === -1) ? "&" : "&";
    script.src += this.objectToUri(params.data);
    script.async = true;
    script.onerror = (evt) => {
      return params.error({
        url: script.src,
        event: evt
      });
    };
    script.onload = script.onreadystatechange = () => {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        script.onload = script.onreadystatechange = null;
        if (script && script.parentNode) {
          return script.parentNode.removeChild(script);
        }
      }
    };
    head = head || window.document.getElementsByTagName("head")[0];
    return head.appendChild(script);
  }
  encode(val) {
    return window.encodeURIComponent(val);
  }
  createElement(tag) {
    return window.document.createElement(tag);
  }
  objectToUri(obj) {
    let data, key, value;
    data = [];
    for (key in obj) {
      value = obj[key];
      data.push(this.encode(key) + "=" + this.encode(value));
    }
    return data.join("&");
  }
  randomString(length) {
    let str;
    str = "";
    while (str.length < length) {
      str += Math.random().toString(36)[2];
    }
    return str;
  }
};

// src/ondemand-client.ts
var OnDemandClient = class {
  constructor(builder) {
    __publicField(this, "config");
    __publicField(this, "jsonp");
    this.config = {
      baseUrl: "https://ondemand.websol.barchart.com",
      apiKey: null,
      useJsonP: true,
      debug: false,
      sandbox: false
    };
    Object.assign(this.config, builder);
  }
  getQuote(options) {
    const requestData = {
      url: this.config.baseUrl + "/getQuote." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getLeaders(options) {
    const requestData = {
      url: this.config.baseUrl + "/getLeaders." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getTechnicals(options) {
    let requestData = {
      url: this.config.baseUrl + "/getTechnicals." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getProfile(options) {
    let requestData = {
      url: this.config.baseUrl + "/getProfile." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getInstrumentDefinition(options) {
    let requestData = {
      url: this.config.baseUrl + "/getInstrumentDefinition." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesSpecifications(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesSpecifications." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesExpirations." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesOptionsExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesOptionsExpirations." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getCompetitors(options) {
    let requestData = {
      url: this.config.baseUrl + "/getCompetitors." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getInsiders(options) {
    let requestData = {
      url: this.config.baseUrl + "/getInsiders." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getHighsLows(options) {
    let requestData = {
      url: this.config.baseUrl + "/getHighsLows." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getMomentum(options) {
    let requestData = {
      url: this.config.baseUrl + "/getMomentum." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSignal(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSignal." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getRatings(options) {
    let requestData = {
      url: this.config.baseUrl + "/getRatings." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getChart(options) {
    let requestData = {
      url: this.config.baseUrl + "/getChart." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getHistory(options) {
    let requestData = {
      url: this.config.baseUrl + "/getHistory." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEquityOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEquityOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSpecialOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSpecialOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSpecialOptionsClassification(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSpecialOptionsClassification." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getWeather(options) {
    let requestData = {
      url: this.config.baseUrl + "/getWeather." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getUSDAGrainPrices(options) {
    let requestData = {
      url: this.config.baseUrl + "/getUSDAGrainPrices." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEarningsEstimates(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEarningsEstimates." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getCorporateActions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getCorporateActions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getIndexMembers(options) {
    let requestData = {
      url: this.config.baseUrl + "/getIndexMembers." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFinancialHighlights(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFinancialHighlights." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getIncomeStatements(options) {
    let requestData = {
      url: this.config.baseUrl + "/getIncomeStatements." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFinancialRatios(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFinancialRatios." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSECFilings(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSECFilings." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getETFDetails(options) {
    let requestData = {
      url: this.config.baseUrl + "/getETFDetails." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSymbolLookup(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSymbolLookUp." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getNews(options) {
    let requestData = {
      url: this.config.baseUrl + "/getNews." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getBalanceSheets(options) {
    let requestData = {
      url: this.config.baseUrl + "/getBalanceSheets." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getClosePrice(options) {
    let requestData = {
      url: this.config.baseUrl + "/getClosePrice." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  get(call, options) {
    let requestData = {
      url: this.config.baseUrl + "/" + call + "." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  format() {
    if (this.config.useJsonP) {
      return "jsonp";
    } else {
      return "json";
    }
  }
  _keyFormat() {
    if (this.config.sandbox) {
      return "key";
    } else {
      return "apikey";
    }
  }
  _checkParamsAndFetch(requestData, options) {
    requestData.params = Object.assign({}, options);
    if (this.config.apiKey) {
      requestData.params[this._keyFormat()] = this.config.apiKey;
    }
    return this._doFetch(requestData);
  }
  _doFetch(requestData) {
    const url = this._buildUrl(requestData.url, requestData.params);
    return new Promise((resolve, reject) => {
      if (this.config.useJsonP) {
        if (!this.jsonp) {
          this.jsonp = new JSONP();
        }
        this.jsonp.fetch({
          url,
          success: (data) => {
            if (this.config.debug) {
              console.log("success", data);
            }
            resolve(data);
          },
          error: (query) => {
            console.log("fetch error", query);
            reject(query);
          }
        });
      } else {
        import_axios.default.get(url).then((response) => {
          if (this.config.debug) {
            console.log("success", response);
          }
          resolve(response.data);
        }).catch((error) => {
          console.log("fetch error", error);
          reject(error);
        });
      }
    });
  }
  _buildUrl(url, parameters) {
    let qs = "";
    for (let key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        const value = parameters[key];
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
      }
    }
    if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1);
      url = url + "?" + qs;
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
      this.config.baseUrl = "http://marketdata.websol.barchart.com";
    } else {
      this.config.baseUrl = "http://ondemand.websol.barchart.com";
    }
    return this;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OnDemandClient
});
