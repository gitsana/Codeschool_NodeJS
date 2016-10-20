/* This takes the file to be uploaded, and makes a copy of it and puts it into another file  */

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	var newFile = fs.createWriteStream('readme_copy.md');
	request.pipe(newFile);

	request.on('end', function() {
		response.end('uploaded!');
	});
}).listen(8080, function() {
	console.log('filestreams - listening on port 8080!')
});

/*
	to make this work, do:
	> curl --upload-file readme.md http://localhost:8080
*/

// http://gulpjs.com	--> 3rd party library
