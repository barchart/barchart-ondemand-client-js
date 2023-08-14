## Javascript client for Barchart OnDemand

A Javascript client for Barchart OnDemand.

Get access to market data and the OnDemand API's in just a few lines of code.

### Example Code

```typescript
import { OnDemandClient } from "@barchart/ondemand-client-js";
const onDemand = new OnDemandClient(); 

// onDemand.setJsonP(false); // set if code is running server-side
onDemand.setAPIKey('change-me');
onDemand.setJsonP(true);

/* get a quote for AAPL and GOOG */
onDemand.getQuote({symbols: 'AAPL,GOOG'}).then((data) => {
    const quotes = data.results;
    for (x in quotes) {
      console.log("getQuote: " + quotes[x].symbol + " [" + quotes[x].name + "] = " + JSON.stringify(quotes[x]));
    }
});
```

### Supported APIs

#### Price Data
* getQuote
* getHistory
* getFuturesOptions
* getSpecialOptions
* getEquityOptions

#### Profiles and Financial Data
* getProfile
* getFinancialHighlights
* getFinancialRatios 
* getIncomeStatements 
* getCompetitors 
* getInsiders
* getRatings
* getIndexMembers

#### Splits, Dividends and Earnings
* getCorporateActions 
* getEarningsEstimates

#### Leaderboards and Lists
* getLeaders 
* getHighsLows 

#### Charts and Analytics
* getChart
* getTechnicals
* getSignal 
* getMomentum

#### News and Filings
* getNews
* getSECFilings

#### Meta Data
* getInstrumentDefinition 
* getFuturesSpecifications 
* getFuturesExpiration 
* getFuturesOptionsExpiration

#### Other
* getWeather
* getUSDAGrainPrices
