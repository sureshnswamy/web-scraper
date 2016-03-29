var express = require('express');
var path = require('path')

var index = require('./routes/index')
var routes = require('./routes/imdb-api')
var search = require('./routes/imdb-search')

var app = express();

// Define the port to run on
app.set('port', 9966)


//app.use(express.static(path.join(__dirname, 'routes')))

app.get('/', index, function (req, res) {
	res.send('OK');
});

app.get('/scrape', routes, function (req, res) {
	res.text;
});

app.get('/search/', search, function (req, res) {
	res.send('OK');
});


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});

module.exports =app