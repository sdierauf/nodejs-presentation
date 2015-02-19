##  Why node is awesome

Simple http server

```javascript
var http = require('http');

function requestHandler(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello CSE 333\n');
} 

http.createServer(requestHandler).listen(1337, '127.0.0.1');
```
