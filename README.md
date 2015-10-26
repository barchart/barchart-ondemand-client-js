## Javascript client for Barchart OnDemand

A zero dependency Javascript client for Barchart OnDemand.

Get access to market data and the OnDemand API's in just a few lines of code.

### Example Code

```javascript

<script src="./dist/barchart-ondemand-client-js.js"></script>

var onDemand = new OnDemandClient();

onDemand.setAPIKey('change-me');
onDemand.setJsonP(true);

/* get a quote for AAPL and GOOG */
onDemand.getQuote({symbols: 'AAPL,GOOG'}, function (err, data) {
        var quotes = data.results;
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
