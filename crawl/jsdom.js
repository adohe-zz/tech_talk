var jsdom = require('jsdom');
var fs = require('fs');
var jquery = fs.readFileSync('./jquery.min.js', 'UTF-8');

/*jsdom.env({
  url : 'http://nodejs.org/dist/',
  src: [jquery],
  done: function(errors, window) {
    console.log('there are ' + window.$('a').length + ' node release!');
  }
});*/

jsdom.env({
  url: 'http://www.baidu.com/s?wd=香港旅游',
  src: [jquery],
  done: function(errors, window) {
    var $ = window.$;
    $('div#ec_im_container div.EC_result a').each(function(index, element) {
      console.log($(element).text());
    });
  }
});
