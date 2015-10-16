require('classes/Queue.js');

var http = require('http');
var env = require('jsdom').env; 

var PARSE_URL = 'fjorgedigital.com';

// var $ = require('jquery')(window);
var html = '';

//list of URL's that are yet to be parsed
var urlQueue = new Queue();
urlQueue.enqueue('fjorgedigital.com');

// list of URLs that have previously been parsed
var parsedUrlList = [];

var options = {
  host: 'fjorgedigital.com',
  port: 80,
  path: '/',
  method: 'GET'
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(data) {
      // collect the data chunks to the variable named "html"
      html += data;
  }).on('end', function() {
      // the whole of webpage data has been collected. parsing time!
      env(html, function (errors, window) {
        console.log(errors);

        var $ = require('jquery')(window)
          ;

        $(html).find('a').each(function() {
          console.log($(this).attr('href'));
        });

        $(html).find('img').each(function() {
          console.log($(this).attr('src'));
        });

        $(html).find('script').each(function() {
          console.log($(this).attr('src'));
        });

        $(html).find('link').each(function() {
          console.log($(this).attr('href'));
        });
      });
   });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
// req.write('data\n');
// req.write('data\n');
req.end();