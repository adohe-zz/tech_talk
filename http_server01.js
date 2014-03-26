var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('beep boop\n');
}).listen(8080, '127.0.0.1', function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
