var cluster = require('cluster'),
    net = require('net'),
    http = require('http');

if (cluster.isMaster) {
    var worker = cluster.fork();

    net.createServer(function(c) {
        console.log('connection master');
        worker.send('conn', c);
    }).listen(3000);
} else {
    var server = http.createServer(function(req, res) {
        console.log('connection');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('okay\n');
    }).listen(0, 'localhost');

    process.on('message', function(msg, c) {
        if (msg !== 'conn') {
            return;
        }

        server.emit('connection', c);
    });
}
