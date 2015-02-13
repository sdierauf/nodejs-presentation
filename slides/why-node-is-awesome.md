##  Why node is awesome

```javascript
// simple-server.js
var http = require('http');

function requestHandler(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello CSE 333\n');
} 

http.createServer(requestHandler).listen(1337, '127.0.0.1');
```
