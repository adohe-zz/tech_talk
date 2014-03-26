var Stream = require('stream');
var fs = require('fs');

var ws = new Stream;
ws.writable = true;
ws.bytes = 0;


ws.write = function(buf) {
	ws.bytes += buf.length;
}

ws.end = function(buf) {
	if(arguments.length) ws.write(buf);

	ws.writable = false;
	console.log('length: ' + ws.bytes);
}

ws.destory = function() {
}

//process.stdin.pipe(ws);
fs.createReadStream('helloworld.txt').pipe(ws);
