
//
// THIS FILE IS AUTO GENERATED 
// PLEASE use "npm run generate" to update types
//

export interface IOnDemandResponse {
    results: unknown;
    status: {
        code: number;
        message: string;
    };
}


// missing docs

export interface IOnDemandGetHistoricHighsLowsOptions {
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
    }[];
}


// regular


export interface IOnDemandGetQuoteOptions {
    symbols: string | string[];
	fields?: string | string[];
	only?: string | string[];
	shareClassFigi?: string | string[];
	figi?: string | string[];
	compositeFigi?: string | string[];
}

export interface IOnDemandGetQuoteResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		dayCode: string;
		serverTimestamp: string;
		mode: string;
		lastPrice: number;
		tradeSize?: number;
		tradeTimestamp: string;
		tradeDate?: string;
		netChange: number;
		percentChange: number;
		tick?: string;
		previousLastPrice?: number;
		previousTimestamp?: string;
		bid?: number;
		bidSize?: number;
		ask?: number;
		askSize?: number;
		unitCode: string;
		open: number;
		high: number;
		low: number;
		close: number;
		numTrades: number;
		dollarVolume: number;
		flag: string;
		previousOpen?: number;
		previousHigh?: number;
		previousLow?: number;
		previousClose?: number;
		previousNetChange?: number;
		previousPercentChange?: number;
		settlement?: number;
		previousSettlement?: number;
		volume: number;
		previousVolume: number;
		openInterest?: number;
		previousOpenInterest?: number;
		fiftyTwoWkHigh?: number;
		fiftyTwoWkHighDate?: string;
		fiftyTwoWkLow?: number;
		fiftyTwoWkLowDate?: string;
		avgVolume?: number;
		impliedVolatility?: number;
		twentyDayAvgVol?: number;
		month?: string;
		year?: string;
		expirationDate?: string;
		lastTradingDay?: string;
		twelveMnthPct?: number;
		twelveMnthPctDate?: string;
		preMarketPrice?: number;
		preMarketNetChange?: number;
		preMarketPercentChange?: number;
		preMarketTimestamp?: string;
		afterHoursPrice?: number;
		afterHoursNetChange?: number;
		afterHoursPercentChange?: number;
		afterHoursTimestamp?: string;
		averageWeeklyVolume?: number;
		averageMonthlyVolume?: number;
		averageQuarterlyVolume?: number;
		exchangeMargin?: string;
		oneMonthHigh?: number;
		oneMonthHighDate?: string;
		oneMonthLow?: number;
		oneMonthLowDate?: string;
		threeMonthHigh?: number;
		threeMonthHighDate?: string;
		threeMonthLow?: number;
		threeMonthLowDate?: string;
		sixMonthHigh?: number;
		sixMonthHighDate?: string;
		sixMonthLow?: number;
		sixMonthLowDate?: string;
		fiveDayHigh?: number;
		fiveDayHighDate?: string;
		fiveDayLow?: number;
		fiveDayLowDate?: string;
		yearToDateHigh?: number;
		yearToDateHighDate?: string;
		yearToDateLow?: number;
		yearToDateLowDate?: string;
		twoYearHigh?: number;
		twoYearHighDate?: string;
		twoYearLow?: number;
		twoYearLowDate?: string;
		exchange?: string;
		weeklyClose?: number;
		weeklyPreviousClose?: number;
		weeklyPreviousHigh?: number;
		weeklyPreviousLow?: number;
		monthlyClose?: number;
		monthlyPreviousClose?: number;
		monthlyPreviousHigh?: number;
		monthlyPreviousLow?: number;
		basis?: number;
		previousBasis?: number;
		commodityDataDelivery?: string;
		commodityDataCurrency?: string;
    }[];
};
export interface IOnDemandGetHistoryOptions {
    symbol: string;
	type: ("ticks" | "minutes" | "nearbyMinutes" | "formTMinutes" | "daily" | "dailyNearest" | "dailyContinue" | "weekly" | "weeklyNearest" | "weeklyContinue" | "monthly" | "monthlyNearest" | "monthlyContinue" | "quarterly" | "quarterlyNearest" | "quarterlyContinue" | "yearly" | "yearlyNearest" | "yearlyContinue");
	startDate?: string;
	endDate?: string;
	maxRecords?: number;
	interval?: number;
	order?: ("asc" | "desc");
	sessionFilter?: string;
	splits?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	dividends?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	volume?: ("total" | "sum" | "contract" | "sumcontract" | "sumtotal");
	nearby?: number;
	jerq?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	exchange?: string | string[];
	backAdjust?: ("true" | "false");
	daysToExpiration?: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60");
	contractRoll?: ("expiration" | "combined");
}

export interface IOnDemandGetHistoryResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		timestamp: string;
		tradingDay: string;
		sessionCode?: string;
		tickPrice?: number;
		tickSize?: number;
		open?: number;
		high?: number;
		low?: number;
		close?: number;
		volume?: number;
		openInterest?: number;
    }[];
};
export interface IOnDemandGetClosePriceOptions {
    symbols: string | string[];
	date?: string;
	splits?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	dividends?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
}

export interface IOnDemandGetClosePriceResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		closePrice: number;
		date: string;
    }[];
};
export interface IOnDemandGetFuturesOptionsOptions {
    root?: string;
	contract?: string;
	symbols?: string | string[];
	exchange?: string;
	type?: string;
	expirationMonth?: number;
	expirationDay?: number;
	fields?: string | string[];
}

export interface IOnDemandGetFuturesOptionsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		root: string;
		contract: string;
		contractName: string;
		contractMonth: string;
		exchange: string;
		type: string;
		strike: number;
		expirationDate: string;
		date: string;
		impliedVolatility: number;
		delta: number;
		gamma: number;
		theta: number;
		vega: number;
		bid?: number;
		bidSize?: number;
		ask?: number;
		askSize?: number;
		open: number;
		high: number;
		low: number;
		last: number;
		previousClose: number;
		change: number;
		percentChange: number;
		premium?: number;
		flag?: string;
		volume: number;
		openInterest?: number;
		settlement?: number;
		previousSettlement?: number;
		extendedSymbol?: string;
    }[];
};
export interface IOnDemandGetSpecialOptionsOptions {
    root?: string;
	contract?: string;
	type?: string;
	premiumRange?: string;
	mode?: string;
	fields?: string | string[];
	sortDirection?: ("ASC" | "DESC");
}

export interface IOnDemandGetSpecialOptionsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		underlying_future: string;
		root: string;
		contract: string;
		contractName: string;
		contractMonth: string;
		exchange: string;
		type: string;
		strike: number;
		expirationDate: string;
		date: string;
		impliedVolatility?: number;
		delta?: number;
		gamma?: number;
		theta?: number;
		vega?: number;
		bid?: number;
		bidSize?: number;
		ask?: number;
		askSize?: number;
		open?: number;
		high?: number;
		low?: number;
		last?: number;
		change?: number;
		percentChange?: number;
		premium?: number;
		volume?: number;
		openInterest?: number;
		flag?: string;
    }[];
};
export interface IOnDemandGetEquityOptionsOptions {
    underlying_symbols: string | string[];
	type?: string;
	strikePrice?: number;
	expirationMonth?: string;
	expirationDate?: string;
	optionType?: string;
	fields?: string | string[];
	onlyStrikes?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	legacySymbols?: 1 | 0;
	returnActualLegacySymbol?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
}

export interface IOnDemandGetEquityOptionsResponse extends IOnDemandResponse {
    results: {
        underlying_symbol: string;
		symbol: string;
		legacySymbol?: string;
		exchange: string;
		type: string;
		strike: number;
		expirationDate: string;
		expirationType: string;
		date: string;
		volatility?: number;
		delta?: number;
		gamma?: number;
		theta?: number;
		vega?: number;
		rho?: number;
		bid?: number;
		bidSize?: number;
		bidDate?: string;
		ask?: number;
		askSize?: number;
		askDate?: string;
		open: number;
		high: number;
		low: number;
		last: number;
		previous: number;
		change: number;
		percentChange: number;
		premium?: number;
		flag?: string;
		settlement?: number;
		lastTradeDate?: string;
		volume?: number;
		openInterest?: number;
		lastUpdateDate?: string;
    }[];
};
export interface IOnDemandGetProfileOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetProfileResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		symbolCode: string;
		exchange: string;
		exchangeName: string;
		instrumentName: string;
		sicSector: string;
		industry: string;
		subIndustry: string;
		indexMembership?: string;
		businessSummary: string;
		ceo: string;
		qtrOneEarnings?: number;
		qtrOneEarningsDate?: string;
		qtrOneEarningsEndDate?: string;
		qtrTwoEarnings?: number;
		qtrTwoEarningsDate?: string;
		qtrTwoEarningsEndDate?: string;
		qtrThreeEarnings?: number;
		qtrThreeEarningsDate?: string;
		qtrThreeEarningsEndDate?: string;
		qtrFourEarnings?: number;
		qtrFourEarningsDate?: string;
		qtrFourEarningsEndDate?: string;
		peRatio?: string;
		epsGrowth?: string;
		recentEarnings?: string;
		annualEPS?: string;
		address: string;
		city: string;
		state: string;
		country: string;
		zipCode: string;
		phoneNumber: string;
		instrumentType: string;
		figi: string;
		compositeFigi: string;
		shareClassFigi: string;
		cik?: number;
    }[];
};
export interface IOnDemandGetFinancialHighlightsOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetFinancialHighlightsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		marketCapitalization: number;
		insiderShareholders: number;
		annualRevenue: number;
		ttmRevenue: number;
		sharesOutstanding: number;
		institutionalShareholders: number;
		annualNetIncome?: number;
		ttmNetIncome?: number;
		ttmNetProfitMargin?: number;
		oneYearReturn: number;
		threeYearReturn: number;
		fiveYearReturn: number;
		fiveYearRevenueGrowth: number;
		fiveYearEarningsGrowth: number;
		fiveYearDividendGrowth: number;
		lastQtrEPS?: number;
		annualEPS: number;
		ttmEPS?: number;
		annualDividendRate: number;
		annualDividendYield: number;
		twelveMonthEPSChg?: number;
		peRatio?: number;
		recentEarnings?: number;
		recentDividends?: number;
		recentSplit?: string;
		beta?: number;
		weightAlpha: number;
    }[];
};
export interface IOnDemandGetFinancialRatiosOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetFinancialRatiosResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		eps: number;
		profitMargin: number;
		roe: number;
		roa: number;
		priceSales: number;
		priceEarnings: number;
		priceBook: number;
		debtEquity?: number;
		interestCoverage?: number;
		bookValue?: number;
		dividendPayout?: number;
    }[];
};
export interface IOnDemandGetIncomeStatementsOptions {
    symbols: string | string[];
	frequency: ("Quarter" | "Annual");
	count?: number;
	rawData?: number;
}

export interface IOnDemandGetIncomeStatementsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		date: string;
		sales: number;
		costGoods: number;
		grossProfit: number;
		operatingExpenses: number;
		operatingIncome: number;
		interestExpense: number;
		otherIncomeExpenses: number;
		preTaxIncome: number;
		incomeTax: number;
		netIncome: number;
		basicEpsContOp: number;
		basicEpsTotalOp: number;
		dilutedEpsContOp: number;
		dilutedEpsBNRI: number;
		dilutedEpsTotalOp: number;
		ebitda: number;
    }[];
};
export interface IOnDemandGetBalanceSheetsOptions {
    symbols: string | string[];
	frequency: ("Quarter" | "Annual");
	count?: number;
	rawData?: number;
}

export interface IOnDemandGetBalanceSheetsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		date: string;
		cash: number;
		marketableSec: number;
		receivables: number;
		prepaidExpenses: number;
		inventories: number;
		deferredIncomeTax: number;
		otherCurrentAssets: number;
		totalCurrentAssets: number;
		ppeNet: number;
		equityOtherInvestments: number;
		intangibles: number;
		otherNonCurrentAssets: number;
		totalNonCurrentAssets: number;
		totalAssets: number;
		shorttermDebt: number;
		accountsPayable: number;
		incomeTaxPayable: number;
		accruedExpenses: number;
		otherCurrentLiabilities: number;
		totalCurrentLiabilities: number;
		longTermDebt: number;
		deferredLongRevenues: number;
		otherNonCurrentLiabilities: number;
		totalNonCurrentLiabilities: number;
		totalLiabilities: number;
		sharesOutstanding: number;
		commonShares: number;
		retainedEarnings: number;
		otherEquity: number;
		totalShareholdersEquity: number;
		totalLiabilitiesAndEquity: number;
    }[];
};
export interface IOnDemandGetCompetitorsOptions {
    symbol: string;
	fields?: string | string[];
	maxRecords?: number;
}

export interface IOnDemandGetCompetitorsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		exchange?: string;
		marketCap: number;
		fiftyTwoWkHigh?: number;
		fiftyTwoWkHighDate?: string;
		fiftyTwoWkLow?: number;
		fiftyTwoWkLowDate?: string;
    }[];
};
export interface IOnDemandGetRatingsOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetRatingsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		averageRecommendation: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
		strongBuy?: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
		moderateBuy?: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
		hold?: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
		moderateSell?: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
		strongSell?: { current: string; one_month_ago: string; two_months_ago: string; three_months_ago: string; };
    }[];
};
export interface IOnDemandGetIndexMembersOptions {
    symbol: string[];
	fields?: string | string[];
}

export interface IOnDemandGetIndexMembersResponse extends IOnDemandResponse {
    results: {
        index: string;
		symbol: string;
		name: string;
		exchange?: string;
    }[];
};
export interface IOnDemandGetCashFlowOptions {
    symbols: string | string[];
	reportPeriod?: ("12M" | "3M");
	fields?: string | string[];
	numberOfYears?: number;
}

export interface IOnDemandGetCashFlowResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		period: string;
		netIncome: number;
		depreciationAndAmortization: number;
		deferredIncomeTax: number;
		accountsReceivable: number;
		accountsPayable: number;
		otherWorkingCapital: number;
		loans: number;
		otherOperatingActivities: number;
		netCashFromOperatingActivities: number;
		changeInDepositsWithBank: number;
		investmentsInProperty: number;
		netAcquisitions: number;
		purchasesOfInvestments: number;
		salesOfInvestments: number;
		purchasesAndSaleOfIntangibles: number;
		netChangeInLoans: number;
		otherInvestingActivity: number;
		netCashUsedForInvestingActivities: number;
		changeInDeposits: number;
		changeInShortTermBorrowing: number;
		debtIssued: number;
		debtRepayment: number;
		commonStockIssued: number;
		commonStockRepurchased: number;
		dividendPaid: number;
		otherFinancingActivity: number;
		netCashProvidedByFinancingActivities: number;
		effectOfExchangeRateChanges: number;
		cashAtBeginningOfPeriod: number;
		cashAtEndOfPeriod: number;
		netChangeInCash: number;
		operatingCashFlow: number;
		capitalExpenditure: number;
		freeCashFlow: number;
    }[];
};
export interface IOnDemandGetCorporateActionsOptions {
    symbols: string | string[];
	startDate?: string;
	endDate?: string;
	eventType: ("split" | "dividend" | "earnings");
	maxRecords?: number;
}

export interface IOnDemandGetCorporateActionsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		eventDate: string;
		eventType: string;
		value: number;
    }[];
};
export interface IOnDemandGetEarningsEstimatesOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetEarningsEstimatesResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		symbolName: string;
		period: string;
		averageEstimate: number;
		numAnalysts?: number;
		highEstimate?: number;
		lowEstimate?: number;
		priorYear?: number;
		growthRateEstimate?: number;
		currentQtrExpectedReportDate?: string;
		expectedEarningsStatus?: string;
		expectedEarningsSource?: string;
		dividendType?: string;
		indicatedAnnualDvnd?: number;
		dividendStatus?: string;
		paymentDate?: string;
		recordDate?: string;
		declarationDate?: string;
		exDividendDate?: string;
		dividendRate?: number;
    }[];
};
export interface IOnDemandGetLeadersOptions {
    exchanges?: string[];
	assetType: ("STK" | "ETF" | "FUND" | "FUT" | "FOREX");
	type: ("active" | "active_5d" | "active_1m" | "active_3m" | "active_6m" | "active_9m" | "active_12m" | "active_ytd" | "gainers" | "gainers_5d" | "gainers_1m" | "gainers_3m" | "gainers_6m" | "gainers_9m" | "gainers_12m" | "gainers_ytd" | "losers" | "losers_5d" | "losers_1m" | "losers_3m" | "losers_6m" | "losers_9m" | "losers_12m" | "losers_ytd" | "hot" | "hot_daily" | "hot_weekly" | "hot_monthly" | "nothot" | "nothot_daily" | "nothot_weekly" | "nothot_monthly" | "barchart");
	maxRecords?: number;
	period?: ("5d" | "20d" | "65d" | "100d" | "260d");
	sortDirection?: ("ASC" | "DESC");
}

export interface IOnDemandGetLeadersResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		symbolName: string;
		exchange: string;
		country: string;
		sicSector: string;
		industry: string;
		subIndustry: string;
		timestamp: string;
		tradeTimestamp: string;
		lastPrice: number;
		priceNetChange: number;
		pricePercentChange: number;
		previousClose: number;
		volume: number;
		previousVolume: number;
		standardDeviation: number;
    }[];
};
export interface IOnDemandGetHighsLowsOptions {
    exchanges?: string[];
	assetType: ("STK" | "ETF" | "FUND" | "FUT" | "FOREX" | "BARCHART");
	type?: ("high" | "low");
	period: ("5d" | "20d" | "65d" | "100d" | "260d");
	maxRecords?: number;
	offset?: number;
}

export interface IOnDemandGetHighsLowsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		symbolName: string;
		exchange: string;
		country: string;
		timestamp: number;
		tradeTime: string;
		lastPrice: number;
		priceNetChange: number;
		pricePercentChange: number;
		previousClose: number;
		volume: number;
		previousVolume: number;
		selectedPeriodHighPrice: number;
		selectedPeriodHighPercent: number;
		selectedPeriodLowPrice: number;
		selectedPeriodLowPercent: number;
    }[];
};
export interface IOnDemandGetChartOptions {
    symbols: string | string[];
	type?: ("BAR" | "LINE" | "CANDLE" | "AREA");
	width?: number;
	height?: number;
	volume?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	period?: ("1d" | "5d" | "3d" | "10d" | "1m" | "3m" | "6m" | "1y" | "2y" | "3y" | "5y" | "10y" | "15y" | "20y" | "25y" | "ytd");
	interval?: ("DO" | "DN" | "WO" | "WN" | "MO" | "MN");
	indicators?: string | string[];
	frequencyType?: string;
}

export interface IOnDemandGetChartResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		imageURL: string;
    }[];
};
export interface IOnDemandGetTechnicalsOptions {
    symbols: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetTechnicalsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		movingAverageFiveDay: number;
		movingAverageTwentyDay: number;
		movingAverageFiftyDay: number;
		movingAverageOneHundredDay: number;
		movingAverageTwoHundredDay: number;
		movingAverageYTD: number;
		priceChangeFiveDay?: number;
		priceChangeTwentyDay?: number;
		priceChangeFiftyDay?: number;
		priceChangeOneHundredDay?: number;
		priceChangeTwoHundredDay?: number;
		priceChangeYTD?: number;
		priceChangeOneMonth?: number;
		priceChangeThreeMonth?: number;
		priceChangeSixMonth?: number;
		priceChangeNineMonth?: number;
		priceChangeFiftyTwoWeek?: number;
		priceChangeTwoYears?: number;
		percentChangeFiveDay?: number;
		percentChangeTwentyDay?: number;
		percentChangeFiftyDay?: number;
		percentChangeOneHundredDay?: number;
		percentChangeTwoHundredDay?: number;
		percentChangeYTD?: number;
		percentChangeOneMonth?: number;
		percentChangeThreeMonth?: number;
		percentChangeSixMonth?: number;
		percentChangeNineMonth?: number;
		percentChangeFiftyTwoWeek?: number;
		percentChangeTwoYears?: number;
		averageVolumeFiveDay?: number;
		averageVolumeTwentyDay?: number;
		averageVolumeFiftyDay?: number;
		averageVolumeOneHundredDay?: number;
		averageVolumeTwoHundredDay?: number;
		averageVolumeYTD?: number;
		nineDayRawStochastic?: number;
		fourteenDayRawStochastic?: number;
		twentyDayRawStochastic?: number;
		fiftyDayRawStochastic?: number;
		oneHundredDayRawStochastic?: number;
		nineDayStochasticK?: number;
		fourteenDayStochasticK?: number;
		twentyDayStochasticK?: number;
		fiftyDayStochasticK?: number;
		oneHundredDayStochasticK?: number;
		nineDayStochasticD?: number;
		fourteenDayStochasticD?: number;
		twentyDayStochasticD?: number;
		fiftyDayStochasticD?: number;
		oneHundredDayStochasticD?: number;
		nineDayATR?: number;
		fourteenDayATR?: number;
		twentyDayATR?: number;
		fiftyDayATR?: number;
		oneHundredDayATR?: number;
		nineDayRelativeStrength?: number;
		fourteenDayRelativeStrength?: number;
		twentyDayRelativeStrength?: number;
		fiftyDayRelativeStrength?: number;
		oneHundredDayRelativeStrength?: number;
		nineDayPercentR?: number;
		fourteenDayPercentR?: number;
		twentyDayPercentR?: number;
		fiftyDayPercentR?: number;
		oneHundredDayPercentR?: number;
		nineDayHistoricVolatility?: number;
		fourteenDayHistoricVolatility?: number;
		twentyDayHistoricVolatility?: number;
		fiftyDayHistoricVolatility?: number;
		oneHundredDayHistoricVolatility?: number;
		nineDayMACD?: number;
		fourteenDayMACD?: number;
		twentyDayMACD?: number;
		fiftyDayMACD?: number;
		oneHundredDayMACD?: number;
		standardDeviation: number;
		percentChangeOneYear?: number;
		percentChangeThreeYear?: number;
		percentChangeFiveYear?: number;
		percentChangeTenYear?: number;
		pivotPoint?: number;
		firstLevelResistance?: number;
		secondLevelResistance?: number;
		thirdLevelResistance?: number;
		firstLevelSupport?: number;
		secondLevelSupport?: number;
		thirdLevelSupport?: number;
		fourWkRetracementHigh?: number;
		fourWkRetracementLow?: number;
		fourWkRetracementHighLow?: number;
		thirteenWkRetracementHigh?: number;
		thirteenWkRetracementLow?: number;
		thirteenWkRetracementHighLow?: number;
		fiftyTwoWkRetracementHigh?: number;
		fiftyTwoWkRetracementLow?: number;
		fiftyTwoWkRetracementHighLow?: number;
		standardDeviationTraditional?: number;
		gapUp?: number;
		gapUpPercent?: number;
		gapDown?: number;
		gapDownPercent?: number;
		percentVolume?: number;
    }[];
};
export interface IOnDemandGetSignalOptions {
    symbols: string | string[];
	fields?: string | string[];
	maxRecords?: number;
}

export interface IOnDemandGetSignalResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		trendspotterOpinion?: string;
		trendspotterStrength: string;
		trendspotterDirection: string;
		adx7DayOpinion?: string;
		adx7DayStrength?: string;
		adx7DayDirection?: string;
		maHiLo10_8DayOpinion?: string;
		maHiLo10_8DayStrength?: string;
		maHiLo10_8DayDirection?: string;
		ma20DaySignal?: string;
		ma20DayStrength?: string;
		ma20DayDirection?: string;
		macd20_50DaySignal?: string;
		macd20_50DayStrength?: string;
		macd20_50DayDirection?: string;
		macd20_200DaySignal?: string;
		macd20_200DayStrength?: string;
		macd20_200DayDirection?: string;
		bbands20DaySignal?: string;
		bbands20DayStrength?: string;
		bbands20DayDirection?: string;
		shortTermAverageSignal: string;
		shortTermAveragePercent: number;
		cci40DaySignal?: string;
		cci40DayStrength?: string;
		cci40DayDirection?: string;
		ma50DaySignal?: string;
		ma50DayStrength?: string;
		ma50DayDirection?: string;
		macd20_100DaySignal?: string;
		macd20_100DayStrength?: string;
		macd20_100DayDirection?: string;
		macd50_150DaySignal?: string;
		macd50_150DayStrength?: string;
		macd50_150DayDirection?: string;
		macd50_200DaySignal?: string;
		macd50_200DayStrength?: string;
		macd50_200DayDirection?: string;
		parabolic50DaySignal?: string;
		parabolic50DayStrength?: string;
		parabolic50DayDirection?: string;
		mediumTermAverageSignal: string;
		mediumTermAveragePercent: number;
		cci60DaySignal?: string;
		cci60DayStrength?: string;
		cci60DayDirection?: string;
		ma100DaySignal?: string;
		ma100DayStrength?: string;
		ma100DayDirection?: string;
		ma150DaySignal?: string;
		ma150DayStrength?: string;
		ma150DayDirection?: string;
		ma200DaySignal?: string;
		ma200DayStrength?: string;
		ma200DayDirection?: string;
		macd50_100DaySignal?: string;
		macd50_100DayStrength?: string;
		macd50_100DayDirection?: string;
		macd100_200DaySignal?: string;
		macd100_200DayStrength?: string;
		macd100_200DayDirection?: string;
		longTermAverageSignal: string;
		longTermAveragePercent: number;
		overallAverageSignal: string;
		overallAveragePercent: number;
		overallAverageStrength: string;
		overallAverageDirection: string;
		previousDaySignal: string;
		previousDayPercent: number;
		lastWeekSignal: string;
		lastWeekPercent: number;
		lastMonthSignal: string;
		lastMonthPercent: number;
		trendspotterNewSignal?: string;
		adx7DayNewSignal?: string;
		maHiLo10_8DayNewSignal?: string;
		ma20DayNewSignal?: string;
		macd20_50DayNewSignal?: string;
		bbands20DayNewSignal?: string;
		cci40DayNewSignal?: string;
		ma50DayNewSignal?: string;
		macd20_100DayNewSignal?: string;
		parabolic50DayNewSignal?: string;
		cci60DayNewSignal?: string;
		ma100DayNewSignal?: string;
		macd50_100DayNewSignal?: string;
		macd20_200DayNewSignal?: string;
		macd50_150DayNewSignal?: string;
		macd50_200DayNewSignal?: string;
		ma150DayNewSignal?: string;
		ma200DayNewSignal?: string;
		macd100_200DayNewSignal?: string;
		macd9_18DaySignal?: string;
		macd9_18DayStrength?: string;
		macd9_18DayDirection?: string;
		macd9_18DayNewSignal?: string;
		macd12_26_9DayStrength?: string;
		macd12_26_9DayDirection?: string;
		macd12_26_9DaySignal?: string;
		macd12_26_9DayNewSignal?: string;
    }[];
};
export interface IOnDemandGetMomentumOptions {
    country?: string;
	exchanges?: string | string[];
}

export interface IOnDemandGetMomentumResponse extends IOnDemandResponse {
    results: {
        country: string;
		advancesToday: number;
		advancesYesterday: number;
		advancesLastWeek: number;
		advancesLastMonth: number;
		unchgToday: number;
		unchgYesterday: number;
		unchgLastWeek: number;
		unchgLastMonth: number;
		declinesToday: number;
		declinesYesterday: number;
		declinesLastWeek: number;
		declinesLastMonth: number;
		percentAbove20dMAtoday: number;
		percentAbove20dMAyesterday: number;
		percentAbove20dMALastWeek: number;
		percentAbove20dMALastMonth: number;
		percentAbove50dMAtoday: number;
		percentAbove50dMAyesterday: number;
		percentAbove50dMALastWeek: number;
		percentAbove50dMALastMonth: number;
		percentAbove100dMAtoday: number;
		percentAbove100dMAyesterday: number;
		percentAbove100dMALastWeek: number;
		percentAbove100dMALastMonth: number;
		percentAbove150dMAtoday: number;
		percentAbove150dMAyesterday: number;
		percentAbove150dMALastWeek: number;
		percentAbove150dMALastMonth: number;
		percentAbove200dMAtoday: number;
		percentAbove200dMAyesterday: number;
		percentAbove200dMALastWeek: number;
		percentAbove200dMALastMonth: number;
		exchange?: string;
		advancingIssues?: number;
		decliningIssues?: number;
		unchangedIssues?: number;
		advancingIssuesPct?: number;
		decliningIssuesPct?: number;
		unchangedIssuesPct?: number;
		advancingShares?: number;
		decliningShares?: number;
		unchangedShares?: number;
		newHighs?: number;
		newLows?: number;
    }[];
};
export interface IOnDemandGetETFDetailsOptions {
    symbols?: string | string[];
	categories?: string | string[];
	subCategories?: string | string[];
}

export interface IOnDemandGetETFDetailsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		fundFamily: string;
		underlyingIndex: string;
		description: string;
		assetClass: string;
		classification: { region: string; country: string; sector: string; equity_index: string; leveraged_family: string; country_listing: string; };
		sector: string;
		inceptionDate: string;
		firstTradeDate: string;
		leverage: string;
		alpha: number;
		beta: number;
		standardDeviation: number;
		sharesOutstanding: number;
		managedAssets: number;
		netAssetValue: number;
		lastNAVUpdateDate: string;
		firstTradePrice: number;
		peRatio: number;
		managementFee: number;
		options: string;
		latestDividend: number;
		dividendDate: string;
		annualDividend: number;
		annualDividendYield: number;
		latestSplit: string;
		splitDate: string;
		ytdReturn: number;
		OneyearReturn: number;
		ThreeyearReturn: number;
		FiveyearReturn: number;
		TenyearReturn: number;
		totalHoldings: number;
		topHoldings1: string;
		topHoldings1Name: string;
		topHoldings1Percent: number;
		topHoldings2: string;
		topHoldings2Name: string;
		topHoldings2Percent: number;
		topHoldings3: string;
		topHoldings3Name: string;
		topHoldings3Percent: number;
		topHoldings4: string;
		topHoldings4Name: string;
		topHoldings4Percent: number;
		topHoldings5: string;
		topHoldings5Name: string;
		topHoldings5Percent: number;
		topHoldings6: string;
		topHoldings6Name: string;
		topHoldings6Percent: number;
		topHoldings7: string;
		topHoldings7Name: string;
		topHoldings7Percent: number;
		topHoldings8: string;
		topHoldings8Name: string;
		topHoldings8Percent: number;
		topHoldings9: string;
		topHoldings9Name: string;
		topHoldings9Percent: number;
		topHoldings10: string;
		topHoldings10Name: string;
		topHoldings10Percent: number;
    }[];
};
export interface IOnDemandGetNewsOptions {
    sources?: string[];
	symbols?: string | string[];
	category?: ("companies" | "politics" | "geography" | "commodities" | "economics" | "stocks" | "futures");
	subCategory?: string[];
	series?: string[];
	keyword?: string;
	maxRecords?: number;
	startDate?: string;
	displayType: ("headline" | "preview" | "full");
	images?: boolean;
	storyId?: number;
	rss?: boolean;
	rssTitle?: string;
	fields?: string | string[];
	barchartClassification?: string | string[];
	organization?: string[];
	lang?: string[];
	sourceFeed?: string;
	exactCategoryMatch?: boolean;
}

export interface IOnDemandGetNewsResponse extends IOnDemandResponse {
    results: {
        newsID: number;
		timestamp: string;
		source: string;
		categories: string;
		subCategories: string;
		headline: string;
		isExternal: boolean;
		headlineURL?: string;
		preview?: string;
		fullText?: string;
		imageURL?: string;
		imageCaption?: string;
		imageHeight?: number;
		imageWidth?: number;
		pdfURL?: string;
		publishDate?: string;
		largeImageURL?: string;
		largeImageHeight?: number;
		largeImageWidth?: number;
		organization: string;
		canonicalUrl: string;
		relatedSymbols: string[];
		sourceFeed?: string;
    }[];
};
export interface IOnDemandGetSECFilingsOptions {
    symbols: string | string[];
	filingType: ("AllEx" | "All" | "10k" | "10q");
	maxRecords?: number;
	startDate?: string;
}

export interface IOnDemandGetSECFilingsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		filingId: string;
		date: string;
		form: string;
		description: string;
		pdfURL: string;
		htmlURL: string;
		wordURL: string;
		excelURL: string;
    }[];
};
export interface IOnDemandGetInstrumentDefinitionOptions {
    symbols?: string | string[];
	exchanges?: string[];
	exchangeMics?: string | string[];
	maxRecords?: number;
	offset?: number;
}

export interface IOnDemandGetInstrumentDefinitionResponse extends IOnDemandResponse {
    results: {
        guid: string;
		id: string;
		symbolRealtime: string;
		symbolHistorical: string;
		symbolDdf: string;
		symbol: string;
		symbolName: string;
		symbolExpiration: string;
		symbolCFI: string;
		exchange: string;
		exchangeName: string;
		exchangeCode: string;
		tickIncrement: number;
		baseCode: string;
		unitCode: number;
		pointValue: number;
    }[];
};
export interface IOnDemandGetFuturesSpecificationsOptions {
    symbols?: string | string[];
	exchanges?: string | string[];
	futuresCategory?: string | string[];
}

export interface IOnDemandGetFuturesSpecificationsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		root: string;
		exchange: string;
		futuresCategory: string;
		contractName: string;
		tradingHours: string;
		ContractSize: string;
		monthsTraded: string;
		tickValue: string;
		pointValue: string;
		optionsUnitValue: string;
		exchangeMargin: string;
		exchangeSymbol: string;
		dailyLimit: string;
    }[];
};
export interface IOnDemandGetFuturesExpirationsOptions {
    roots?: string | string[];
	contracts?: string | string[];
	fields?: string | string[];
}

export interface IOnDemandGetFuturesExpirationsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		exchange: string;
		contract: string;
		firstNoticeDate: string;
		expirationDate: string;
		lastTradingDay?: string;
    }[];
};
export interface IOnDemandGetFuturesOptionsExpirationsOptions {
    roots?: string | string[];
	contracts?: string | string[];
	symbols?: string | string[];
}

export interface IOnDemandGetFuturesOptionsExpirationsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		exchange: string;
		underlyingContract: string;
		expirationDate: string;
    }[];
};
export interface IOnDemandGetSpecialOptionsClassificationOptions {
    root?: string | string[];
	category?: string;
}

export interface IOnDemandGetSpecialOptionsClassificationResponse extends IOnDemandResponse {
    results: {
        root: string;
		category: ( { categoryName: string; } & ({  data: { symbol: string; name: string; }  } | { "sub-categories": { subCategoryName: string;  data: { symbol: string; name: string; }  }[] }) )[];
    }[];
};
export interface IOnDemandGetForexForwardCurvesOptions {
    symbols: string | string[];
}

export interface IOnDemandGetForexForwardCurvesResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		name: string;
		bid: number;
		ask: number;
		mid: number;
		lastUpdate: string;
		forwardCurves: { symbol: string; name: string; bid: number; ask: number; mid: number; open: number; high: number; low: number; last: number; previous: number; lastUpdate: string; }[];
    }[];
};
export interface IOnDemandGetWeatherOptions {
    weatherType?: ("CC" | "F" | "MAP");
	zipCode?: string;
	fields?: string | string[];
	mapType?: ("localRadarAnimation" | "usRadarSatellite" | "usRadarSatelliteAnimation" | "todaysWeatherMap" | "currentWindConditions" | "todaysPrecipitationAccumulation" | "dailyPrecipitation" | "usSoilMoisture" | "usCurrentTemperatures");
	mapRegion?: ("centralPlains" | "dakotas" | "californiaArizona" | "colorado" | "deepSouth" | "delta" | "farWest" | "florida" | "greatBasin" | "greatLakes" | "midAtlantic" | "montana" | "northEast" | "ohioValley" | "pacificNorthwest" | "rockyMountains" | "southAtlantic" | "southPlains" | "southTexas" | "southWest");
	mapWidth?: number;
	mapHeight?: number;
}

export interface IOnDemandGetWeatherResponse extends IOnDemandResponse {
    results: {
        weatherType: string;
		zipCode: string;
		location: string;
		currentCondition: string;
		currentConditionIcon: string;
		currentTemperature: string;
		currentPressure: string;
		feelsLike: string;
		windDirection?: string;
		windSpeed?: string;
		humidity?: string;
		dewpoint?: string;
		forecastedDay?: string;
		forcastedPrecipitation?: string;
		chancePrecipitationDay?: string;
		chancePrecipitationNight?: string;
		windchill?: string;
		dewFrostWeight?: string;
		hoursSun?: string;
		soilMoisture?: string;
		evaporation?: string;
		dryingIndex?: string;
		solarRadiation?: string;
		livestockSafteyIndex?: string;
		cumulativeHDD?: string;
		cumulativeGDD?: string;
		forecastDayCondition?: string;
		forecastDayConditionIcon?: string;
		forecastNightCondition?: string;
		forecastNightConditionIcon?: string;
		forecastHighTemperature?: string;
		forecastLowTemperature?: string;
		mapRegion: string;
		mapType: string;
		mapUrl: string;
    }[];
};
export interface IOnDemandGetGrainBidsOptions {
    requestType?: ("commodities" | "locations" | "bids");
	location?: string | string[];
	latitude?: number;
	longitude?: number;
	zipCode?: string;
	maxDistance?: number;
	county?: string;
	fipsCode?: number;
	commodityName?: string | string[];
	totalLocations?: number;
	getAllBids?: never /* possible values [boolean, 1|0 , '1'|'0', 'true'|'false'] 
 please check docs of specific method for given property. 
 please fix in barchart-ondemand-client-js as well! */;
	bidsPerCom?: number;
	numOfDecimals?: number;
	fields?: string | string[];
	deliveryStart?: string;
	deliveryEnd?: string;
}

export interface IOnDemandGetGrainBidsResponse extends IOnDemandResponse {
    results: {
        bids: { active: boolean; as_of: string; basis: string; basisRollingSymbol: string; basisSymbol: string; basiscwt: number; basismonth: string; basistonee: number; cashPriceRollingSymbol: string; cashPriceSymbol: string; cashprice: string; cashpricetonne: string; change: string; commodity: string; commodity_display_name: string; commodity_id: string; currency: string; customer_commodity_id: string; deliveryMonth: string; deliveryYear: string; delivery_end: string; delivery_end_raw: string; delivery_sort: string; delivery_start: string; delivery_start_raw: string; id: string; nodeId: string; notes: null | any; pctchange: string; price: string; pricecwt: string; pricetonne: string; rawchange: number; sym_root: string; symbol: string; timestamp: number; unitvalue: number; unitweight: number; usesCurrencyConversion: boolean; usesVolumeConversion: boolean; }[];
		distance: string;
		company: string;
		elevatorId?: number;
		locationId: number;
		location: string;
		facility_type: string;
		address: string;
		city: string;
		state: string;
		lng: number;
		lat: number;
		phone: string;
		url: string;
		zip: string;
		county: string;
		county_code?: string;
		fips_code?: number;
		crop_district?: string;
		basisTimestamp: string;
		commodities?: null | any;
		basisTimestampRaw: number;
    }[];
};
export interface IOnDemandGetUSDAGrainPricesOptions {
    commodityTypes?: ("C" | "CCO" | "CSO" | "WDN" | "HRW" | "HRW11" | "O" | "HRWORD" | "SM" | "S" | "SRW" | "SWW")[];
	bidTypes?: ("E" | "P" | "R" | "T" | "B")[];
}

export interface IOnDemandGetUSDAGrainPricesResponse extends IOnDemandResponse {
    results: {
        commodityType: string;
		grade: string;
		protein: string;
		locationState: string;
		locationCity: string;
		location: string;
		bidType: string;
		lowPrice: number;
		lowPriceChange: number;
		lowBasis: number;
		lowBasisChange: number;
		lowBasisMonth: string;
		highPrice: number;
		highPriceChange: number;
		highBasis: number;
		highBasisChange: number;
		highBasisMonth: string;
		freight: string;
		transMode: string;
		current: string;
		deliveryStart: string;
		deliveryStartHalf: string;
		deliveryEnd: string;
		deliveryEndHalf: string;
		report: string;
		reportDate: string;
		priceChange: number;
		basis: string;
		bidChange: number;
    }[];
};
export interface IOnDemandGetCmdtyStatsOptions {
    symbol: string;
	startDate?: string;
	endDate?: string;
	order?: ("asc" | "desc");
}

export interface IOnDemandGetCmdtyStatsResponse extends IOnDemandResponse {
    results: {
        symbol: string;
		shortSymbol: string;
		shortName: string;
		mediumName: string;
		longName: string;
		seriesDescription: string;
		item: string;
		measurement: string;
		measurements?: string[];
		frequency: string;
		unit: string;
		multiplier: number;
		area: string;
		areaType: string;
		sources: string[];
		contents?: string[];
		unitDescription: string;
		lastRefresh: string;
		stats: { date: string; value: string; }[];
    }[];
};
export interface IOnDemandGetCmdtyCalendarOptions {
    startDate: string;
	endDate: string;
	category?: ("All" | "Ag" | "Energy" | "Econ" | "Freight" | "Metals" | "Rates");
	country?: string | string[];
	importance?: ("1" | "2" | "3");
	symbol?: string | string[];
	order?: ("asc" | "desc");
	fields?: ("reference_ending" | "prior_reference_ending" | "status")[];
}

export interface IOnDemandGetCmdtyCalendarResponse extends IOnDemandResponse {
    results: {
        date: string;
		country: string;
		event: string;
		report: string;
		source: string;
		category: string;
		reference: string;
		reference_ending?: string;
		actual: number;
		prior_reference_ending?: string;
		prior: number;
		revised: number;
		unit: string;
		status?: string;
		refreshed: string;
		symbol: string;
		importance: number;
    }[];
};