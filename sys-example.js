var http = require('http');
var sys = require('sys');
var spawn = require('child_process').spawn;
// var ls = spawn('ls', ['-lh', '/']);

// ls.stdout.on('data', function(data) {
//   console.log(data.toString('ascii'));
// })

http.createServer(function (req, res) {
  var ls = spawn('ls', ['-lh', '/']);
  ls.stdout.on('data', function(data) {
    // console.log(data.toString('ascii'));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data.toString('ascii'));
  })
}).listen(3555, '127.0.0.1');

