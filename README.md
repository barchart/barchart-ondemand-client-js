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
    }else{
        data.forEach(function(quote) {
            console.log("getQuote = " + index + ": " + quote.symbol + " [" + quote.name + "] = " + JSON.stringify(quote));
        });
    }
});
```