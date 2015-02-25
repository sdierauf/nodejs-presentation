##  It's server-side javascript!

*You can do bad things*

```javascript
var http = require('http');
var sys = require('sys');
var spawn = require('child_process').spawn;

http.createServer(function (req, res) {
  var ls = spawn('ls', ['-lh', '/']);
  ls.stdout.on('data', function(data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data.toString('ascii'));
  })
}).listen(3555, '127.0.0.1');
```
