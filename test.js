var jsdom = require("jsdom"); 
var $ = require('/usr/lib/node_modules/jquery');

jsdom.env({  
  html: "<html><body></body></html>",
  scripts: [
    'http://code.jquery.com/jquery-1.5.min.js'
  ]
}, function (err, window) {
  var $ = window.jQuery;

  $('body').append("<div class='testing'>Hello World</div>");
  console.log($(".testing").text()); // outputs Hello World
});

var http = require('http');

var options = {
    host: 'jquery.com',
    port: 80,
    path: '/'
};

var html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        // collect the data chunks to the variable named "html"
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        var title = $(html).find('title').text();
        console.log(title);
     });
});