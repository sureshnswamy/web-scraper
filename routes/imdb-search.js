var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

var movies = {'movie':[{ 'title': '', release:'','rating':''}]}

router.get('/search', function(req, res){
    url: 'http://www.imdb.com/+find?ref_=nv_sr_fn&q='+req+'&s=all'
    request(url, function err, res, html) {
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var searchRes = { url : ""};
    }
})

}



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

    // fs.writeFile('./data/movies.json', JSON.stringify(movie, null, 5), function(err){
    fs.appendFile('./data/movies.json', JSON.stringify(movie, null, ' '), function(err) {
      console.log('File successfully written! Check project directory movies.json  file');
    })
    res.send('Check your console!')
  })
})

//console.log('Scrapping happens on port 9966');
module.exports = router
