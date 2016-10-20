var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter(); // want to emit error, warn, and info events

// want to listen for events

logger.on('error', function(message){
	console.log('ERR: ' + message);
});


setTimeout(function() {
	logger.emit('error', 'Error emitted after 5000 ms: Spilled Milk, Rotten Now');
}, 5000);

logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Broken Egg');