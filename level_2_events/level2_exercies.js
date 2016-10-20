/* ------------------------------
1 - Create a chat emitter 
------------------------------ */

var events = require('events');
var EventEmitter = events.EventEmitter;

// add code below
var chat = new EventEmitter();			// Create a new EventEmitter object and assign it to a variable called 'chat'.
chat.on('message', function(message) {	// listen for the 'message' event on our new chat object. Remember to add a callback that accepts the message parameter.
  console.log(message);						// Log the message to the console using console.log().
});


/* ------------------------------
2 - Emitting events
------------------------------ */
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here	(code added here)
chat.emit('join', 'Emitting: custom message on JOIN.');	// On the chat object, emit the 'join' event and pass in a custom message as a string.
chat.emit('message', 'Emitting: custom message on MESSAGE.'); // Now emit the 'message' event on the chat object. Just like before, remember to pass in a custom message as a string.

/* ------------------------------
3 - Request event
------------------------------ */
// Refactor the code for alternate way of listening for request events.

var http = require('http'); // (stays the same)
// ------------------------------------------------------------------------------------------

// old code

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

// new code

var server = http.createServer();

server.on('request', function(request,response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
// ------------------------------------------------------------------------------------------
server.listen(8080); // (stays the same)

/* ------------------------------
4 - Listening Twice
------------------------------ */

var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.listen(8080);

/* ------------------------------
5 - Listening for close
------------------------------ */

var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log('Closing down the server...');
});

server.listen(8080);


// ----











