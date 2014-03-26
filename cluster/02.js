var cp = require('child_process');
var net = require('net');

var worker1 = cp.fork('./02_work.js');
var worker2 = cp.fork('./02_work.js');

var server = net.createServer();

server.listen(8001, function() {
  worker1.send('server', server);
  worker2.send('server', server);
  server.close();
});
