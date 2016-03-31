var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

router.post('/scrape', function(req, res){
  //console.log(req.body.scrape)
  
  var url = req.body.scrape
  var movies = {'movie':[]}

  //url = 'http://www.imdb.com/'.concat(str)
   //url = 'http://www.imdb.com/title/tt1229340/'
  //url= 'http://www.imdb.com/title/tt2488496/';
  
  //console.log('here is imdb link', url )
  
  request(url, function(error, response, html){
    if(!error){
      
      var $ = cheerio.load(html);

      var title, release, rating;
      var movie = { title : "", release : "", rating : "", poster: ""};

      $('.title_wrapper').filter(function(){
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();
        movie.title = title;
        movie.release = release;
      })

      $('.slate_wrapper').filter(function(){
        var data = $(this)
        poster = data.children().first().children().first().children().first()[0].attribs.src
        movie.poster = poster
      })

      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();
        movie.rating = rating;
      })
        movies['movie'].push(movie)
        //console.log(movie)

        fs.writeFile('./data/movie-data.json', JSON.stringify(movies),  function(err) {
          console.log('File successfully written! Check project directory movies.json  file');
        })
    }
    res.json(movies)
  })
})

//console.log('Scrapping happens on port 9966');
module.exports = router
