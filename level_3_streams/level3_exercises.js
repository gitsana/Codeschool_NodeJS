/* ------------------------------------------------
 1 - File read stream - use the fs module to read a file and log its contents to the console.
 ------------------------------------------------ */

var fs = require('fs');

var file = fs.createReadStream('fruits.txt');	// Use the fs module to create a Readable stream for fruits.txt. Store the new stream in a variable called file.

file.on('readable', function() {	// Next, listen to the readable event on the newly created stream and give it a callback.
  var chunk = null;  // Inside the callback, read the data chunks from the stream and print them to the console using console.log() - you might want to use a while loop to do this. Don't forget to call toString() on the data before printing it.
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});

/* ------------------------------------------------
 2 - File piping - Instead of manually listening for the 'readable' event on the Readable stream, let's use pipe to read from the stream and write directly to process.stdout.
 ------------------------------------------------ */
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

// file.on('readable', function(){				// Start by removing the code for the readable handler.
//   var chunk;
//   while(null !== (chunk = file.read())){
//     console.log(chunk.toString());
//   }
// });

// replace with this line
file.pipe(process.stdout);	// Call file.pipe(), passing it the stream to write to.


/* ------------------------------------------------
3 - Fixing pipe
 ------------------------------------------------ */

var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, {end:false});	// consult the pipe documentation to figure out the option which keeps the Write stream open and dispatches the end event.

file.on('end', function(){
  destFile.end('Finished!');
});

/* ------------------------------------------------
 4 - Download server
 ------------------------------------------------ */

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);		// Use pipe() to send index.html to the response.
}).listen(8080);













