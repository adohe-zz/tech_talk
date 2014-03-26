var Stream = require('stream');

var rs = new Stream;
rs.readable = true;

var counter = 0;
var iv = setInterval(function() {
	rs.emit('data', String(counter++));
}, 100);

setTimeout(function() {
	clearInterval(iv);
	rs.emit('end');
	rs.readable = false;
}, 2000);

rs.pipe(process.stdout, {end: false});
