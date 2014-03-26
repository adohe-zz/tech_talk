var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var http = require('http');

if(cluster.isMaster) {
	for(var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	http.createServer(function(req, res) {
		res.writeHead(200);
		res.end('beep boop\n');
	}).listen(8000);
}

/*cluster.setupMaster({
	exec: '02_work.js'
});

for(var i = 0; i < numCPUs; i++) {
	cluster.fork();
}*/
