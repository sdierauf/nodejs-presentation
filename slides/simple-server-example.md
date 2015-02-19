##  Simple server example again

```javascript
var http = require('http');
function requestHandler(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>MLP Fan Site</h1>');
} 
http.createServer(requestHandler).listen(1337, '127.0.0.1');
```
* Each request to the server is enqueued
* Uses `requestHandler` as the callback