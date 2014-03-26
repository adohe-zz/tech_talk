var net = require('net');

var clients  = [];

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

net.createServer(function(socket) {

  socket.name = socket.remoteAddress + '-' + getRandom(100, 11);

  clients.push(socket);

  socket.write('Welcome ' + socket.name + '\n');
	broadcastMsg(socket, socket.name + ' joined.\n');

  socket.on('data', function(msg) {
		broadcastMsg(socket, msg);
  });

  socket.on('end', function() {
    clients.slice(clients.indexOf(socket), 1);
  });

	function broadcastMsg(sender, msg) {
			clients.forEach(function(client) {
				if(client === sender) return;
				client.write(msg);
			});
	}

}).listen(8124, '127.0.0.1', function() {
		console.log('server bound at http://127.0.0.1:8124/');
});
