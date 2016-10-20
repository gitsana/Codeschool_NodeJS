// custom_goodbye.js

// in this way, you can have many exported functions versus the way it's done in custom_hello.js

exports.goodbye = function() {
	console.log('custom goodbye!');
}

exports.farewell = function(name) {
	console.log('so long, farewell, i hate to bid audieu.\n--' + name);
}
