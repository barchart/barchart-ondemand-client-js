import { IOnDemandResponse } from "./interfaces";
export interface IOnDemandGetEquityOptionsByDateOptions {
    token: string;
    underlying_symbol: string;
    date?: string;
    fields?: string | string[];
}
export interface IOnDemandGetEquityOptionsByDateResponse extends IOnDemandResponse {
    results: {
        underlying_symbol: string;
        symbol: string;
        exchange: string;
        baseSymbolLast: number;
        type: "Call" | "Put";
        strike: number;
        expirationDate: string;
        expirationType: "monthly" | "weekly";
        daysToExpiration: number;
        date: string;
        volatility: number;
        theoretical: number;
        delta: number;
        gamma: number;
        theta: number;
        vega: number;
        rho: number;
        bid: number;
        bidSize: number;
        bidDate: string;
        ask: number;
        askSize: number;
        askDate: string;
        open: number | null;
        high: number | null;
        low: number | null;
        last: number | null;
        previous: number | null;
        change: number;
        percentChange: number;
        settlement: number | null;
        volume: number | null;
        openInterest: number | null;
        lastUpdateDate: string | null;
    }[] | null;
}
export interface IOnDemandGetHistoricHighsLowsOptions {
    token: string;
    symbols: string | string[];
}
export interface IOnDemandGetHistoricHighsLowsResponse extends IOnDemandResponse {
    results: {
        name: string;
        symbol: string;
        fiveDayHistory: Array<{
            change: number;
            date: string;
            high: number;
            last: number;
            low: number;
            open: number;
            pctchange: number;
            volume: number;
        }>;
        highsAndLows: Array<{
            dateSince: string;
            high: number;
            highDate: string;
            low: number;
            lowDate: string;
            percent: number;
            period: string;
        }>;
        newHighsAndLows: Array<{
            highPercent: number;
            lowPercent: number;
            madeLowHigh: number;
            madeNewHigh: number;
            period: string;
        }>;
    }[] | null;
}
export interface IOnDemandGetFuturesOptionsHistoryOptions {
    token: string;
    symbol: string;
}
export interface IOnDemandGetFuturesOptionsHistoryResponse extends IOnDemandResponse {
    results: {
        symbol: string;
        root: string;
        month: string;
        year: string;
        type: "C" | "P";
        strike: number;
        date: string;
        open: number | null;
        high: number | null;
        low: number | null;
        close: number | null;
        volume: number | null;
        openInterest: number | null;
        delta: number | null;
        gamma: number | null;
        theta: number | null;
        vega: number | null;
        twentyDayVolatility: number | null;
        impliedVolatility: number | null;
    }[] | null;
}
