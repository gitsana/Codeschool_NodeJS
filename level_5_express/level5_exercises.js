// ---------------------------------------------------------------------------------------------------------
// EXPRESS ROUTES
// Let's create an express route that accepts GET requests on '/tweets' and responds by sending back a static HTML file.
var express = require('express');
var app = express();

app.get('/tweets', function(request, response){
  response.sendFile(__dirname + '/tweets.html');
});

app.listen(8080);

// ---------------------------------------------------------------------------------------------------------
// ROUTE PARAMS
// Let's create a route that accepts dynamic arguments in the URL path and responds with the quote from the proper author.
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response){
  response.write(quotes[request.params.name]);
  response.end();
});

app.listen(8080);

// ---------------------------------------------------------------------------------------------------------
// RENDERING
// Instead of just writing out the quote to the response, let's try using an EJS template to render the response.
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];	// First, render the quote.ejs template to the response.
  res.render('quote.ejs', {name: req.params.name, quote:quote}); // Next, make the name and the quote data available to the template.
});
	// Inside quote.ejs, add the code needed to render the data you passed to the template.
<h2>Quote by <%= name %></h2>

<blockquote>
  <%= quote %>
</blockquote>

// ---------------------------------------------------------------------------------------------------------
// URL BUILDING
// Let's create a page which calls the Twitter search API and displays the last few results for Code School. The first step is to construct the proper URL, which is all you need to do in this challenge.
// Complete the URL options which will be sent into the the url module's format method. The URL you'll want to construct is the following: http://search.twitter.com/search.json?q=codeschool
// The url is: "http://search.twitter.com/search.json?q=codeschool"

var url = require('url');

options = {
  // add URL options here
  protocol:"http:",				// Add the protocol attribute to options.
  host: "search.twitter.com",	// Add the host attribute to options.
  pathname: "/search.json",		// Add the pathname attribute to options.
  query: {q: "codeschool"}		// Add an attribute which takes an object of query parameters, in this case we only need q to search Twitter.
};

var searchURL = url.format(options);
console.log(searchURL);

// ---------------------------------------------------------------------------------------------------------
// DOING THE REQUEST
// Next, we'll use the request module to make a simple web request and log the response to the console. You can use this example in the README.
// Example:
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
// exercise:
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: "/search.json",
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');  // require the request module and assign the return function to a variable.
request(searchURL, function(error, response, body){		// Next, issue a request to searchURL. Remember, the callback function for the request function takes three arguments: error, response and body.
  console.log(response.body);		// Finally, log the response body to the console using console.log()
});

// ---------------------------------------------------------------------------------------------------------
// EXPRESS SERVER
// Now, let's create an Express server which queries out for the search term and then returns the JSON.
var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
var express = require('express'); // Require the express module.
var app = express(); // Create server here

app.get('/', function(req, res){	// Create a route for GET requests to / (root path). Remember, the callback function takes two arguments: a request req and a response res.
  request(searchURL).pipe(res);  // In our new route, issue a request to searchURL and pipe the results into the response.
});

app.listen(8080); 








