var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

//var searchList = {'movies':[{ 'titlesUrl': '', imageUrl:''}]}
var movieList = { 'list':[]}

router.get('/search/', function (req, res){
  var str = 'jaws'

  // var str = JSON.stringyfy(movieName)

  var url= 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+str+'&s=all'

  console.log ('here is search', str, url)


  request(url, function (err, response, html) {

    if(!err) {


      var $ = cheerio.load(html);

      var  data, img, titleUrl, imgUrl;
      var searchRes = { 'titlesUrl': '', imageUrl:''}

      $('.primary_photo').each(function() {
        data = $(this).children();
        titleUrl = data.attr('href');
        imgUrl= $('img', data).attr("src");

        searchRes['titleUrl'].titleUrl
        searchRes['imgUrl'].imgUrl


        console.log("here is title and image link", titleUrl)
      })


    }

    // fs.appendFile('./data/movieList.json', JSON.stringify(titles, null, ' '), function(err) {
    fs.appendFileSync('./data/movieList.json', JSON.stringify(movieList))
    //   function(err) {
    //   console.log('File successfully written to  movieList.json  file');
    // })

    res.send('Your movie serach is here!')
  })

})

module.exports = router
