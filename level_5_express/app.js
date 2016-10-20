var express = require('express');
var app = express();

// now can start defining endpoints
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
	console.log('listening on port 8080');
});