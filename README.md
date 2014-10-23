## Javascript client for Barchart OnDemand

### Example Code

```javascript
var onDemand = new OnDemandClient();

onDemand.setAPIKey('change-me');
onDemand.setJsonP(true);

/* get a quote for AAPL and GOOG */
onDemand.getQuote({symbols: 'AAPL,GOOG'}, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        var quotes = data.results;
        for (x in quotes) {
            console.log("getQuote: " + quotes[x].symbol + " [" + quotes[x].name + "] = " + JSON.stringify(quotes[x]));
        }
    }
});
```