var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');

var index = require('./routes/index')
var routes = require('./routes/imdb-api')
var search = require('./routes/imdb-search')

var app = express();

// Define the port to run on
var port = 9966

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// render html to client
app.use(express.static(__dirname + '/public'));

app.get('/',  function (req, res) {
	res.send('index.html');
});


app.post('/search', search, function (req,res) {
  var searchStr = req.body.movStr
  res.send(searchStr)
})

app.get('/scrape', routes, function (req, res) {
	res.text;
});

// app.get('/search/', search, function (req, res) {
// 	res.send('OK');
// });

// Listen for requests
app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});

module.exports =app
