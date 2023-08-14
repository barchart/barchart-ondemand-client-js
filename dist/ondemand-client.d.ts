import type { IOnDemandGetLeadersResponse, IOnDemandGetLeadersOptions, IOnDemandGetQuoteOptions, IOnDemandGetQuoteResponse, IOnDemandGetTechnicalsOptions, IOnDemandGetProfileOptions, IOnDemandGetProfileResponse, IOnDemandGetInstrumentDefinitionOptions, IOnDemandGetInstrumentDefinitionResponse, IOnDemandGetFuturesSpecificationsOptions, IOnDemandGetFuturesSpecificationsResponse, IOnDemandGetFuturesExpirationsOptions, IOnDemandGetFuturesExpirationsResponse, IOnDemandGetFuturesOptionsExpirationsOptions, IOnDemandGetFuturesOptionsExpirationsResponse, IOnDemandGetCompetitorsOptions, IOnDemandGetCompetitorsResponse, IOnDemandGetHighsLowsOptions, IOnDemandGetHighsLowsResponse, IOnDemandGetMomentumOptions, IOnDemandGetMomentumResponse, IOnDemandGetSignalOptions, IOnDemandGetSignalResponse, IOnDemandGetRatingsOptions, IOnDemandGetRatingsResponse, IOnDemandGetChartOptions, IOnDemandGetChartResponse, IOnDemandGetHistoryOptions, IOnDemandGetHistoryResponse, IOnDemandGetFuturesOptionsOptions, IOnDemandGetFuturesOptionsResponse, IOnDemandGetEquityOptionsOptions, IOnDemandGetEquityOptionsResponse, IOnDemandGetSpecialOptionsOptions, IOnDemandGetSpecialOptionsResponse, IOnDemandGetSpecialOptionsClassificationOptions, IOnDemandGetSpecialOptionsClassificationResponse, IOnDemandGetWeatherOptions, IOnDemandGetWeatherResponse, IOnDemandGetUSDAGrainPricesOptions, IOnDemandGetUSDAGrainPricesResponse, IOnDemandGetEarningsEstimatesOptions, IOnDemandGetEarningsEstimatesResponse, IOnDemandGetCorporateActionsOptions, IOnDemandGetCorporateActionsResponse, IOnDemandGetIndexMembersOptions, IOnDemandGetIndexMembersResponse, IOnDemandGetFinancialHighlightsOptions, IOnDemandGetFinancialHighlightsResponse, IOnDemandGetIncomeStatementsOptions, IOnDemandGetIncomeStatementsResponse, IOnDemandGetFinancialRatiosOptions, IOnDemandGetFinancialRatiosResponse, IOnDemandGetSECFilingsOptions, IOnDemandGetSECFilingsResponse, IOnDemandGetETFDetailsOptions, IOnDemandGetETFDetailsResponse, IOnDemandGetNewsOptions, IOnDemandGetNewsResponse, IOnDemandGetBalanceSheetsOptions, IOnDemandGetBalanceSheetsResponse, IOnDemandGetClosePriceOptions, IOnDemandGetClosePriceResponse, IOnDemandGetCashFlowOptions, IOnDemandGetCashFlowResponse, IOnDemandGetCmdtyCalendarOptions, IOnDemandGetCmdtyCalendarResponse, IOnDemandGetHistoricHighsLowsOptions, IOnDemandGetHistoricHighsLowsResponse, IOnDemandGetForexForwardCurvesOptions, IOnDemandGetForexForwardCurvesResponse, IOnDemandGetCmdtyStatsOptions, IOnDemandGetCmdtyStatsResponse, IOnDemandGetGrainBidsOptions, IOnDemandGetGrainBidsResponse } from "./interfaces";
export interface IOnDemandClientConfig {
    baseUrl: string;
    apiKey: string | null;
    useJsonP: boolean;
    debug: boolean;
    sandbox: boolean;
}
interface IInternalFetchRequestData {
    url: string;
    params?: {
        key?: string;
        apikey?: string;
    } & Record<any, any>;
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
export declare class OnDemandClient {
    config: IOnDemandClientConfig;
    jsonp?: any;
    constructor(builder?: Partial<IOnDemandClientConfig>);
    getQuote(options: IOnDemandGetQuoteOptions): Promise<IOnDemandGetQuoteResponse>;
    getLeaders(options: IOnDemandGetLeadersOptions): Promise<IOnDemandGetLeadersResponse>;
    getTechnicals(options: IOnDemandGetTechnicalsOptions): void;
    getProfile(options: IOnDemandGetProfileOptions): Promise<IOnDemandGetProfileResponse>;
    getInstrumentDefinition(options: IOnDemandGetInstrumentDefinitionOptions): Promise<IOnDemandGetInstrumentDefinitionResponse>;
    getFuturesSpecifications(options: IOnDemandGetFuturesSpecificationsOptions): Promise<IOnDemandGetFuturesSpecificationsResponse>;
    getFuturesExpirations(options: IOnDemandGetFuturesExpirationsOptions): Promise<IOnDemandGetFuturesExpirationsResponse>;
    getFuturesOptionsExpirations(options: IOnDemandGetFuturesOptionsExpirationsOptions): Promise<IOnDemandGetFuturesOptionsExpirationsResponse>;
    getCompetitors(options: IOnDemandGetCompetitorsOptions): Promise<IOnDemandGetCompetitorsResponse>;
    getInsiders<T = unknown>(options: unknown): Promise<T>;
    getHighsLows(options: IOnDemandGetHighsLowsOptions): Promise<IOnDemandGetHighsLowsResponse>;
    getMomentum(options: IOnDemandGetMomentumOptions): Promise<IOnDemandGetMomentumResponse>;
    getSignal(options: IOnDemandGetSignalOptions): Promise<IOnDemandGetSignalResponse>;
    getRatings(options: IOnDemandGetRatingsOptions): Promise<IOnDemandGetRatingsResponse>;
    getChart(options: IOnDemandGetChartOptions): Promise<IOnDemandGetChartResponse>;
    getHistory(options: IOnDemandGetHistoryOptions): Promise<IOnDemandGetHistoryResponse>;
    getFuturesOptions(options: IOnDemandGetFuturesOptionsOptions): Promise<IOnDemandGetFuturesOptionsResponse>;
    getEquityOptions(options: IOnDemandGetEquityOptionsOptions): Promise<IOnDemandGetEquityOptionsResponse>;
    getSpecialOptions(options: IOnDemandGetSpecialOptionsOptions): Promise<IOnDemandGetSpecialOptionsResponse>;
    getSpecialOptionsClassification(options: IOnDemandGetSpecialOptionsClassificationOptions): Promise<IOnDemandGetSpecialOptionsClassificationResponse>;
    getWeather(options: IOnDemandGetWeatherOptions): Promise<IOnDemandGetWeatherResponse>;
    getUSDAGrainPrices(options: IOnDemandGetUSDAGrainPricesOptions): Promise<IOnDemandGetUSDAGrainPricesResponse>;
    getEarningsEstimates(options: IOnDemandGetEarningsEstimatesOptions): Promise<IOnDemandGetEarningsEstimatesResponse>;
    getCorporateActions(options: IOnDemandGetCorporateActionsOptions): Promise<IOnDemandGetCorporateActionsResponse>;
    getIndexMembers(options: IOnDemandGetIndexMembersOptions): Promise<IOnDemandGetIndexMembersResponse>;
    getFinancialHighlights(options: IOnDemandGetFinancialHighlightsOptions): Promise<IOnDemandGetFinancialHighlightsResponse>;
    getIncomeStatements(options: IOnDemandGetIncomeStatementsOptions): Promise<IOnDemandGetIncomeStatementsResponse>;
    getFinancialRatios(options: IOnDemandGetFinancialRatiosOptions): Promise<IOnDemandGetFinancialRatiosResponse>;
    getSECFilings(options: IOnDemandGetSECFilingsOptions): Promise<IOnDemandGetSECFilingsResponse>;
    getETFDetails(options: IOnDemandGetETFDetailsOptions): Promise<IOnDemandGetETFDetailsResponse>;
    getSymbolLookup<T = unknown>(options: unknown): Promise<T>;
    getNews(options: IOnDemandGetNewsOptions): Promise<IOnDemandGetNewsResponse>;
    getBalanceSheets(options: IOnDemandGetBalanceSheetsOptions): Promise<IOnDemandGetBalanceSheetsResponse>;
    getClosePrice(options: IOnDemandGetClosePriceOptions): Promise<IOnDemandGetClosePriceResponse>;
    get(call: "getEquityOptionsIntraday", options: IOnDemandGetEquityOptionsOptions): Promise<IOnDemandGetEquityOptionsResponse>;
    get(call: "getCashFlow", options: IOnDemandGetCashFlowOptions): Promise<IOnDemandGetCashFlowResponse>;
    get(call: "getCmdtyCalendar", options: IOnDemandGetCmdtyCalendarOptions): Promise<IOnDemandGetCmdtyCalendarResponse>;
    get(call: "getHistoricHighsLows", options: IOnDemandGetHistoricHighsLowsOptions): Promise<IOnDemandGetHistoricHighsLowsResponse>;
    get(call: "getForexForwardCurves", options: IOnDemandGetForexForwardCurvesOptions): Promise<IOnDemandGetForexForwardCurvesResponse>;
    get(call: "getCmdtyStats", options: IOnDemandGetCmdtyStatsOptions): Promise<IOnDemandGetCmdtyStatsResponse>;
    get(call: "getGrainBids", options: IOnDemandGetGrainBidsOptions): Promise<IOnDemandGetGrainBidsResponse>;
    format(): "json" | "jsonp";
    _keyFormat(): "key" | "apikey";
    _checkParamsAndFetch<T>(requestData: IInternalFetchRequestData, options: any): Promise<T>;
    _doFetch<T = any>(requestData: IInternalFetchRequestData): Promise<T>;
    _buildUrl(url: string, parameters: Record<string, any>): string;
    setAPIKey(apiKey: string): this;
    setJsonP(useJsonP: boolean): this;
    setDebug(debug: boolean): this;
    setBaseUrl(base: string): this;
    setSandbox(sandbox: boolean): this;
}
export {};
