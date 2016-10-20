
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);	// status code in header
	response.write("<p>Dog is running.</p>"); // response body
	setTimeout(function() {
		response.write("<p><b>Dog is done running.</b></p>");
		response.end();	// close the connection
	}, 5000);

	response.write("<button>Click me!</button>");

}).listen(8080);	// listen for connections on this port

console.log("listening on port 8080...");