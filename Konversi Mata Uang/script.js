function convertCurrency() {
    
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;

    var amount = parseFloat(document.getElementById("amount").value);
    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    
    var convertedAmount = amount * exchangeRate;
    var resultElement = document.getElementById("result");
    resultElement.innerText = amount + " " + fromCurrency + " = " + convertedAmount.toFixed(2) + " " + toCurrency;
  }
    function getExchangeRate(fromCurrency, toCurrency) {

    var exchangeRates = {
      usd: {
        eur: 0.91,
        yen: 151.39,
        idr: 15682,
        won: 1.352
      },
      eur: {
        usd: 1.08,
        yen: 164.93,
        idr: 17088,
        won: 1.452
      },
      yen: {
        usd: 0.0066,
        eur: 0.0061,
        idr: 103.71,
        won: 8.918
      },
      idr: {
        usd: 0.000064,
        eur: 0.000058,
        yen: 0.0096,
        won: 0.085
      },
      won: {
        usd: 0.0007,
        eur: 0.0007,
        yen: 0.11,
        idr: 11.7
      }
    };
  
    return exchangeRates[fromCurrency][toCurrency];
  }
  