/* This takes the file to be uploaded, and makes a copy of it and puts it into another file  
IN ADDITION it adds the upload progress real time. All you need for this is 'fs' and 'http'
*/
'use strict';
var fs = require('fs');
var http = require('http');

var propsArray = ['headers', 'url', 'method', 'statusCode', 'statusMessage', 'readable', 'httpVersion', 'connection', 'socket', 'complete','domain'];
var headersArray = ['host','user-agent','accept','content-length','expect'];

// originalFileName: string file name
function getCopyFileName(originalFileName) {
	var fileNameParts = originalFileName.split('.');
	console.log(fileNameParts[0]);
	fileNameParts[0] = fileNameParts[0].replace('/', '');
	console.log(fileNameParts[0]);
	return fileNameParts[0] + '_copy.' + fileNameParts[1];
}

http.createServer(function(request, response) {
	
	for(var prop in propsArray) {
		var p = propsArray[prop];
		console.log(p + ": " + request[p]);
		if (typeof request[p] === 'object' && request[p] !== null) {
			console.log('\t This is an object:\n' + Object.keys(request[p]));
		}
		if (p == 'headers') {
			for (var i=0; i < headersArray.length; i++) {
				var h = headersArray[i];
				console.log('\t' + h + ': ' + request.headers[h]);
			}
		}
	}

	var newFileName = getCopyFileName(request['url']);	// copy the fie name, base new new name off this one instead
	var newFile = fs.createWriteStream(newFileName);
	// var newFile = fs.createWriteStream('readme_copy.md');
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;

	request.on('readable', function() {
		var chunk = null;
		while(null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;
			var progress = (uploadedBytes / fileBytes) * 100;
			response.write('progress: ' + parseInt(progress, 10) + '%\n');
			console.log('progress: ' + parseInt(progress, 10) + '%\n');
		}
	});

	request.pipe(newFile);

	request.on('end', function() {
		response.end('weee uploaded!');
	});
}).listen(8080, function() {
	console.log('file streams with progress bar - listening on port 8080!');
});
