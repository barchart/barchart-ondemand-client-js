var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/ondemand-client.ts
import axios from "axios";
var OnDemandClient = class {
  constructor(builder) {
    __publicField(this, "config");
    __publicField(this, "jsonp");
    this.config = {
      baseUrl: "https://ondemand.websol.barchart.com",
      apiKey: null,
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
  getFuturesOptionsHistory(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesOptionsHistory." + this.format()
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
  getDividendData(options) {
    let requestData = {
      url: this.config.baseUrl + "/getDividendData." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEquityOptionsExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEquityOptionsExpirations." + this.format()
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
    return "json";
  }
  _keyFormat() {
    if (this.config.sandbox) {
      return "key";
    } else {
      return "apikey";
    }
  }
  _checkParamsAndFetch(requestData, options) {
    let token = null;
    if (options.token) {
      token = options.token;
      delete options.token;
    }
    if (!token) {
      throw new Error("Token is required for all requests.");
    }
    const requestDataAuth = {
      url: requestData.url,
      token,
      params: Object.assign({}, options)
    };
    if (this.config.apiKey) {
      requestDataAuth.params[this._keyFormat()] = this.config.apiKey;
    }
    return this._doFetch(requestDataAuth);
  }
  _doFetch(requestData) {
    const url = this._buildUrl(requestData.url, requestData.params);
    const headers = { "Authorization": "Bearer " + requestData.token };
    return new Promise((resolve, reject) => {
      axios.get(url, { headers }).then((response) => {
        if (this.config.debug) {
          console.log("success", response);
        }
        resolve(response.data);
      }).catch((error) => {
        console.log("fetch error", error);
        reject(error);
      });
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
export {
  OnDemandClient
};
