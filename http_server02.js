var http = require('http');
var url = require('url');

var server = http.createServer();

server.addListener('connection', function(socket) {
  console.log('accept a new connection');
});

server.addListener('request', function(req, res) {
	console.log(url.parse(req.url).pathname);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('beep boop two');
});

/**
 *server.on('connection', function(socket) {
 *});
 *server.on('request', function(req, res) {
 *});
**/

server.listen(8080, '127.0.0.1', function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
