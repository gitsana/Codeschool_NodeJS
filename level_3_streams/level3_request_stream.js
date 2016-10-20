// streams
var http = require('http');

// http.createServer(function(request, response) {

// 	response.writeHead(200);
	
// 	// echo back int he response what you're getting from client request
// 	request.on('readable', function() {
// 		var chunk = null;
// 		while( null !== (chunk = request.read())) {
// 			response.write(chunk);	// no toString() needed, "response.write" automatially does this for you
// 			// console.log(chunk.toString()); NOTE: toString() needed here
// 		}
// 	});

// 	request.on('end', function() {
// 		response.end();
// 	});
// 	// end of echoing back

// }).listen(8080, function() {
// 	console.log('listening on 8080...');
// });

// Alternatively, replace those two top methods with the Node 'pipe' method
http.createServer(function(request, response) {

	response.writeHead(200);
	request.pipe(response);	// echo back int he response what you're getting from client request

}).listen(8080, function() {
	console.log('Listening on 8080 (pipe version of code here)');
});

// now, curl from command line:
// > curl -d 'hello' http://localhost:8080
