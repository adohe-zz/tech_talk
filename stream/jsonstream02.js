var JSONStream = require('JSONStream');
var fs = require('fs');

var parser = JSONStream.parse(['features', true, 'geometry', 'coordinates']);

parser.on('data', function(data) {
	console.log(data);
});

parser.on('root', function(root, count) {
	if(!count) {
		console.log('on one match!!!\n');
	}
});

fs.createReadStream('./citylots.json').pipe(parser);
