import axios from 'axios';
import { JSONP } from "./jsonp";
import type {
    IOnDemandGetLeadersResponse,
    IOnDemandGetLeadersOptions,
    IOnDemandGetQuoteOptions,
    IOnDemandGetQuoteResponse,
    IOnDemandGetTechnicalsOptions,
    IOnDemandGetTechnicalsResponse,
    IOnDemandGetProfileOptions,
    IOnDemandGetProfileResponse,
    IOnDemandGetInstrumentDefinitionOptions,
    IOnDemandGetInstrumentDefinitionResponse,
    IOnDemandGetFuturesSpecificationsOptions,
    IOnDemandGetFuturesSpecificationsResponse,
    IOnDemandGetFuturesExpirationsOptions,
    IOnDemandGetFuturesExpirationsResponse,
    IOnDemandGetFuturesOptionsExpirationsOptions,
    IOnDemandGetFuturesOptionsExpirationsResponse,
    IOnDemandGetCompetitorsOptions,
    IOnDemandGetCompetitorsResponse,
    IOnDemandGetHighsLowsOptions,
    IOnDemandGetHighsLowsResponse,
    IOnDemandGetMomentumOptions,
    IOnDemandGetMomentumResponse,
    IOnDemandGetSignalOptions,
    IOnDemandGetSignalResponse,
    IOnDemandGetRatingsOptions,
    IOnDemandGetRatingsResponse,
    IOnDemandGetChartOptions,
    IOnDemandGetChartResponse,
    IOnDemandGetHistoryOptions,
    IOnDemandGetHistoryResponse,
    IOnDemandGetFuturesOptionsOptions,
    IOnDemandGetFuturesOptionsResponse,
    IOnDemandGetEquityOptionsOptions,
    IOnDemandGetEquityOptionsResponse,
    IOnDemandGetSpecialOptionsOptions,
    IOnDemandGetSpecialOptionsResponse,
    IOnDemandGetSpecialOptionsClassificationOptions,
    IOnDemandGetSpecialOptionsClassificationResponse,
    IOnDemandGetWeatherOptions,
    IOnDemandGetWeatherResponse,
    IOnDemandGetUSDAGrainPricesOptions,
    IOnDemandGetUSDAGrainPricesResponse,
    IOnDemandGetEarningsEstimatesOptions,
    IOnDemandGetEarningsEstimatesResponse,
    IOnDemandGetCorporateActionsOptions,
    IOnDemandGetCorporateActionsResponse,
    IOnDemandGetIndexMembersOptions,
    IOnDemandGetIndexMembersResponse,
    IOnDemandGetFinancialHighlightsOptions,
    IOnDemandGetFinancialHighlightsResponse,
    IOnDemandGetIncomeStatementsOptions,
    IOnDemandGetIncomeStatementsResponse,
    IOnDemandGetFinancialRatiosOptions,
    IOnDemandGetFinancialRatiosResponse,
    IOnDemandGetSECFilingsOptions,
    IOnDemandGetSECFilingsResponse,
    IOnDemandGetETFDetailsOptions,
    IOnDemandGetETFDetailsResponse,
    IOnDemandGetNewsOptions,
    IOnDemandGetNewsResponse,
    IOnDemandGetBalanceSheetsOptions,
    IOnDemandGetBalanceSheetsResponse,
    IOnDemandGetClosePriceOptions,
    IOnDemandGetClosePriceResponse,
    IOnDemandGetCashFlowOptions,
    IOnDemandGetCashFlowResponse,
    IOnDemandGetCmdtyCalendarOptions,
    IOnDemandGetCmdtyCalendarResponse,
    IOnDemandGetHistoricHighsLowsOptions,
    IOnDemandGetHistoricHighsLowsResponse,
    IOnDemandGetForexForwardCurvesOptions,
    IOnDemandGetForexForwardCurvesResponse,
    IOnDemandGetCmdtyStatsOptions,
    IOnDemandGetCmdtyStatsResponse,
    IOnDemandGetGrainBidsOptions,
    IOnDemandGetGrainBidsResponse,
    IOnDemandGetEquityOptionsExpirationsOptions,
    IOnDemandGetEquityOptionsExpirationsResponse,
    IOnDemandGetDividendDataOptions,
    IOnDemandGetDividendDataResponse,
} from "./interfaces";
import { IOnDemandGetEquityOptionsByDateOptions, IOnDemandGetEquityOptionsByDateResponse } from './interfaces.manual';

export interface IOnDemandClientConfig {
    baseUrl: string;
    apiKey: string | null;
    useJsonP: boolean;
    debug: boolean;
    sandbox: boolean;
}
interface IInternalFetchRequestData {
    url: string;
    params?: { key?: string; apikey?: string; } & Record<any, any>;
}


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
    config: IOnDemandClientConfig;
    jsonp?: any;

    constructor(builder?: Partial<IOnDemandClientConfig>) {
        this.config = {
            baseUrl: 'https://ondemand.websol.barchart.com',
            apiKey: null,
            useJsonP: true,
            debug: false,
            sandbox: false
        };

        Object.assign(this.config, builder);
    }

    getQuote(options: IOnDemandGetQuoteOptions) {
        const requestData = {
            url: this.config.baseUrl + '/getQuote.' + this.format(),
        };
        return this._checkParamsAndFetch<IOnDemandGetQuoteResponse>(requestData, options);
    };

    getLeaders(options: IOnDemandGetLeadersOptions) {
        const requestData = {
            url: this.config.baseUrl + '/getLeaders.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetLeadersResponse>(requestData, options);
    };

    getTechnicals(options: IOnDemandGetTechnicalsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getTechnicals.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetTechnicalsResponse>(requestData, options);
    };

    getProfile(options: IOnDemandGetProfileOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getProfile.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetProfileResponse>(requestData, options);
    };

    getInstrumentDefinition(options: IOnDemandGetInstrumentDefinitionOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getInstrumentDefinition.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetInstrumentDefinitionResponse>(requestData, options);
    };

    getFuturesSpecifications(options: IOnDemandGetFuturesSpecificationsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFuturesSpecifications.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFuturesSpecificationsResponse>(requestData, options);
    };

    getFuturesExpirations(options: IOnDemandGetFuturesExpirationsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFuturesExpirations.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFuturesExpirationsResponse>(requestData, options);
    };

    getFuturesOptionsExpirations(options: IOnDemandGetFuturesOptionsExpirationsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFuturesOptionsExpirations.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFuturesOptionsExpirationsResponse>(requestData, options);
    }

    getCompetitors(options: IOnDemandGetCompetitorsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getCompetitors.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetCompetitorsResponse>(requestData, options);
    }

    getInsiders<T = unknown>(options: unknown) {
        let requestData = {
            url: this.config.baseUrl + '/getInsiders.' + this.format()
        };
        return this._checkParamsAndFetch<T>(requestData, options);
    }

    getHighsLows(options: IOnDemandGetHighsLowsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getHighsLows.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetHighsLowsResponse>(requestData, options);
    };

    getMomentum(options: IOnDemandGetMomentumOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getMomentum.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetMomentumResponse>(requestData, options);
    };

    getSignal(options: IOnDemandGetSignalOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getSignal.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetSignalResponse>(requestData, options);
    };

    getRatings(options: IOnDemandGetRatingsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getRatings.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetRatingsResponse>(requestData, options);
    };

    getChart(options: IOnDemandGetChartOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getChart.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetChartResponse>(requestData, options);
    };

    getHistory(options: IOnDemandGetHistoryOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getHistory.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetHistoryResponse>(requestData, options);
    };

    getFuturesOptions(options: IOnDemandGetFuturesOptionsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFuturesOptions.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFuturesOptionsResponse>(requestData, options);
    };

    getEquityOptions(options: IOnDemandGetEquityOptionsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getEquityOptions.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetEquityOptionsResponse>(requestData, options);
    };

    getSpecialOptions(options: IOnDemandGetSpecialOptionsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getSpecialOptions.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetSpecialOptionsResponse>(requestData, options);
    };

    getSpecialOptionsClassification(options: IOnDemandGetSpecialOptionsClassificationOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getSpecialOptionsClassification.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetSpecialOptionsClassificationResponse>(requestData, options);
    };

    getWeather(options: IOnDemandGetWeatherOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getWeather.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetWeatherResponse>(requestData, options);
    };

    getUSDAGrainPrices(options: IOnDemandGetUSDAGrainPricesOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getUSDAGrainPrices.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetUSDAGrainPricesResponse>(requestData, options);
    };

    getEarningsEstimates(options: IOnDemandGetEarningsEstimatesOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getEarningsEstimates.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetEarningsEstimatesResponse>(requestData, options);
    };

    getCorporateActions(options: IOnDemandGetCorporateActionsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getCorporateActions.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetCorporateActionsResponse>(requestData, options);
    };

    getIndexMembers(options: IOnDemandGetIndexMembersOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getIndexMembers.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetIndexMembersResponse>(requestData, options);
    };

    getFinancialHighlights(options: IOnDemandGetFinancialHighlightsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFinancialHighlights.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFinancialHighlightsResponse>(requestData, options);
    };

    getIncomeStatements(options: IOnDemandGetIncomeStatementsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getIncomeStatements.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetIncomeStatementsResponse>(requestData, options);
    };

    getFinancialRatios(options: IOnDemandGetFinancialRatiosOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getFinancialRatios.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetFinancialRatiosResponse>(requestData, options);
    };

    getSECFilings(options: IOnDemandGetSECFilingsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getSECFilings.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetSECFilingsResponse>(requestData, options);
    };

    getETFDetails(options: IOnDemandGetETFDetailsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getETFDetails.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetETFDetailsResponse>(requestData, options);
    };

    getSymbolLookup<T = unknown>(options: unknown) {
        let requestData = {
            url: this.config.baseUrl + '/getSymbolLookUp.' + this.format()
        };
        return this._checkParamsAndFetch<T>(requestData, options);
    };

    getNews(options: IOnDemandGetNewsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getNews.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetNewsResponse>(requestData, options);
    };

    getBalanceSheets(options: IOnDemandGetBalanceSheetsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getBalanceSheets.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetBalanceSheetsResponse>(requestData, options);
    };

    getClosePrice(options: IOnDemandGetClosePriceOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getClosePrice.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetClosePriceResponse>(requestData, options);
    };

    getDividendData(options: IOnDemandGetDividendDataOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getDividendData.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetDividendDataResponse>(requestData, options);
    };

    getEquityOptionsExpirations(options: IOnDemandGetEquityOptionsExpirationsOptions) {
        let requestData = {
            url: this.config.baseUrl + '/getEquityOptionsExpirations.' + this.format()
        };
        return this._checkParamsAndFetch<IOnDemandGetEquityOptionsExpirationsResponse>(requestData, options);
    };

    get(call: "getEquityOptionsIntraday", options: IOnDemandGetEquityOptionsOptions): Promise<IOnDemandGetEquityOptionsResponse>;
    get(call: "getCashFlow", options: IOnDemandGetCashFlowOptions): Promise<IOnDemandGetCashFlowResponse>;
    get(call: "getCmdtyCalendar", options: IOnDemandGetCmdtyCalendarOptions): Promise<IOnDemandGetCmdtyCalendarResponse>;
    get(call: "getHistoricHighsLows", options: IOnDemandGetHistoricHighsLowsOptions): Promise<IOnDemandGetHistoricHighsLowsResponse>;
    get(call: "getForexForwardCurves", options: IOnDemandGetForexForwardCurvesOptions): Promise<IOnDemandGetForexForwardCurvesResponse>;
    get(call: "getCmdtyStats", options: IOnDemandGetCmdtyStatsOptions): Promise<IOnDemandGetCmdtyStatsResponse>;
    get(call: "getGrainBids", options: IOnDemandGetGrainBidsOptions): Promise<IOnDemandGetGrainBidsResponse>;
    get(call: "getEquityOptionsByDate", options: IOnDemandGetEquityOptionsByDateOptions): Promise<IOnDemandGetEquityOptionsByDateResponse>;
    get<T = unknown>(call: string, options: unknown) {
        let requestData = {
            url: this.config.baseUrl + '/' + call + '.' + this.format()
        };
        return this._checkParamsAndFetch<T>(requestData, options);
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

    _checkParamsAndFetch<T>(requestData: IInternalFetchRequestData, options: any) {
        requestData.params = Object.assign({}, options);

        /* attach key to request */
        if (this.config.apiKey) {
            requestData.params![this._keyFormat()] = this.config.apiKey;
        }

        return this._doFetch<T>(requestData);
    };

    _doFetch<T = any>(requestData: IInternalFetchRequestData) {
        const url = this._buildUrl(requestData.url, requestData.params as object);
        return new Promise<T>((resolve, reject) => {
            if (this.config.useJsonP) {

                if (!this.jsonp) {
                    this.jsonp = new JSONP();
                }

                this.jsonp.fetch({
                    url: url,
                    success: (data: T) => {
                        if (this.config.debug) {
                            console.log('success', data);
                        }
                        resolve(data);
                    },
                    error: (query: any) => {
                        console.log('fetch error', query);
                        reject(query)
                    }
                });
            } else {
                axios.get(url)
                    .then((response) => {
                        if (this.config.debug) {
                            console.log('success', response);
                        }
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log('fetch error', error);
                        reject(error)
                    });
            }
        });
    }

    _buildUrl(url: string, parameters: Record<string, any>) {
        let qs = '';
        for (let key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                const value = parameters[key];
                qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
            }
        }
        if (qs.length > 0) {
            qs = qs.substring(0, qs.length - 1);
            url = url + '?' + qs;
        }
        return url;
    }

    setAPIKey(apiKey: string) {
        this.config.apiKey = apiKey;
        return this;
    }

    setJsonP(useJsonP: boolean) {
        this.config.useJsonP = useJsonP;
        return this;
    }

    setDebug(debug: boolean) {
        this.config.debug = debug;
        return this;
    }

    setBaseUrl(base: string) {
        this.config.baseUrl = base;
        return this;
    }

    setSandbox(sandbox: boolean) {
        this.config.sandbox = sandbox;
        if (sandbox) {
            this.config.baseUrl = 'http://marketdata.websol.barchart.com';
        } else {
            this.config.baseUrl = 'http://ondemand.websol.barchart.com';
        }
        return this;
    };
}
