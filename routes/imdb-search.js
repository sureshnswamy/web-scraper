var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

var movies = {'movie':[{ 'title': '', release:'','rating':''}]}

router.get('/search/', function (req, res){
  var str = 'avengers'
    // var str = JSON.stringyfy(movieName)

  var url= 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+str+'&s=all'

  console.log ('here is search', str, url)

  request(url, function (err, response, html) {

    if(!err) {
  
      var $ = cheerio.load(html);

      var title, release, rating;
      var searchRes = { url : ""};
      
      $('.findList').filter(function() {
        var data = $(this);
        titles = data.text().trim();
        photo = data.childern().first().trim()
        console.log(titles)
      })
    }
    fs.appendFile('./data/movieList.json', JSON.stringify(titles, null, ' '), function(err) {
      console.log('File successfully written to  movieList.json  file');
    })

    res.send('Your movie serach is here!')
  })

})

module.exports = router
