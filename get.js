let url = 'https://api.binance.com/api/v1/exchangeInfo';
let params = {};
let headers = {};
cordova.plugin.http.get(url, 
    params, headers, (response) => {
  console.log(response.status);
}, function(response) {
  console.error(response.error);
});