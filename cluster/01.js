require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('beep boop');
}).listen(8001, '127.0.0.1', function() {
  console.log('Server bound at http://127.0.0.1:8001/');
});
