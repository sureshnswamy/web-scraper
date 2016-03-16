var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var movies = {'movie':[{ 'title': '', release:'','rating':''}]}
app.get('/scrape', function(req, res){
 // url = 'http://www.imdb.com/title/tt1229340/'
  url= 'http://www.imdb.com/title/tt2488496/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var movie = { title : "", release : "", rating : ""};

      $('.title_wrapper').filter(function(){
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();
        movie.title = title;
        movie.release = release;
      })

      $('.slate_wrapper').filter(function(){
        var data =$(this)
        poster = data.children().first().children().first().children().first()[0].attribs.src
        //console.log(data.children().first().children().first().children().first()[0].attribs.src)
        movie.poster = poster

      })

      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();

        movie.rating = rating;
      })

    }


    movies.movie.push(movie)
    fs.writeFile('movies.data', JSON.stringify(movie, null, 4), function(err){
      //output.push(json)
      console.log('File successfully written! Check project directory output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen('8081')
console.log('Scrapping happens on port 8081');
module.exports = app
