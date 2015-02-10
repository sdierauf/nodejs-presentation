var http = require('http');
var requestHandler = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello CSE 333\n');
}
http.createServer(requestHandler).listen(1337, '127.0.0.1');