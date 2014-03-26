var net = require('net');

var server = net.createServer(function(socket) {
  socket.pipe(socket);
});

server.listen(8124, '127.0.0.1');
