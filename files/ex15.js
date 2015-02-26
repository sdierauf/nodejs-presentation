var net = require('net');
var fs = require('fs');

var host = process.argv[2];
var port = process.argv[3];
var filename = process.argv[4];

var socket = new net.Socket();
socket.connect(port, host, function() {
  fs.readFile(filename, function (error, data) {
    socket.write(data);
    process.exit();
  });
});