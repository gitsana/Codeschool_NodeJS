// app.js
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
    response.write(contents);
    response.end();
  });

}).listen(8080);

// index.html
<html><p>Hello, this is Dog</p></html>