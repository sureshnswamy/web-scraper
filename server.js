var express = require('express');
var path = require('path')

var index = require('./routes/index')
var routes = require('./routes/imdb-api')
var search = require('./routes/imdb-search')

var app = express();

// Define the port to run on
app.set('port', 9966)


//app.use(express.static(path.join(__dirname, 'routes')))

app.get('/', index)
app.get('/scrape', routes)
app.get('/search/', search)


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});