// app.js

var hello = require('./custom_hello');
var gb = require('./custom_goodbye');

hello(); // now can call the function from here
gb.goodbye();
gb.farewell('Samuel');
// alternatively, you could also do and it would be only one line:

// require('./custom_goodbye').goodbye();
