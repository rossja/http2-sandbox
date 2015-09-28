process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // don't care about TLS errors

require('http2').get('https://localhost:8080/', function(response) {
  response.pipe(process.stdout);
});