import { IOnDemandResponse } from "./interfaces";

export interface IOnDemandGetEquityOptionsByDateOptions {
  underlying_symbol: string;
  date?: string;
  fields?: string | string[];
}

export interface IOnDemandGetEquityOptionsByDateResponse
  extends IOnDemandResponse {
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
  }[];
}
