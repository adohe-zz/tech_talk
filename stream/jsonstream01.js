var JSONStream = require('JSONStream');
var fs = require('fs');

var parser = JSONStream.parse(['features', true, 'geometry', 'coordinates']);

var stringify = JSONStream.stringify();
parser.pipe(stringify);

stringify.pipe(fs.createWriteStream('coord.json'));
fs.createReadStream('./citylots.json').pipe(parser);
