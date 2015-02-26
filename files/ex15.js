var net = require('net');
var fs = require('fs');

var host = process.argv[2];
var port = process.argv[3];
var filename = process.argv[4];

var client = new net.Socket();
client.connect(port, host, function() {
  fs.readFile(filename, function (error, data) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    client.write(data);
    process.exit();
  });
});