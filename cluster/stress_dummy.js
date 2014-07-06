var async = require('async'),
    request = require('request'),
    moment = require('moment'),
    http = require('http');

function dummy_request(callback) {
    /*request.get({
        url: 'http://localhost:3000'
    }, function(err, res, body) {
        console.log(res.statusCode);
        if (err) {
          console.log(err);
        }
    });*/
    http.get('http://localhost:3000', function (res) {
        console.log(res.statusCode);
    }).on('error', function (e) {
        console.log(e.message);
    });
}

function run(n) {
    var mstart = moment();
    /*async.times(n, function(i, callback) {
        var mstart2 = moment();
        async.parallel({
            dummy1: dummy_request,
            dummy2: dummy_request,
            dummy3: dummy_request,
            dummy4: dummy_request,
            dummy5: dummy_request,
        }, function(err, results) {
            var mend2 = moment();
            console.log(i, 'done, err:', err, 'time elapsed (ms):', mend2.diff(mstart2));
            callback();
        });
    }, function(err) {
        var mend = moment();
        console.log('time elapsed (ms):', mend.diff(mstart));
    });*/
    var mstart2 = moment();
    async.parallel({
        dummy1: dummy_request,
        dummy2: dummy_request,
        dummy3: dummy_request,
        dummy4: dummy_request,
        dummy5: dummy_request,
    }, function(err, results) {
        var mend2 = moment();
        console.log(i, 'done, err:', err, 'time elapsed (ms):', mend2.diff(mstart2));
    });
}

var n = parseInt(process.argv[2]) || 1;
console.log('running', n, 'times');
run(n);
