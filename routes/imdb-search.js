var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();


router.get('/search/', function (req, res){

var searchList = {}
var str = 'jaws'
var url= 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+str+'&s=all'
  var str = 'jaws'

  // var str = JSON.stringyfy(movieName)

  var url= 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+str+'&s=all'

  //console.log ('here is search', str, url)



  request(url, function (err, response, html) {

    if(!err) {

      var $ = cheerio.load(html);

      var  data, img, titleUrl, imgUrl;

      $('.primary_photo').each(function() {
        data = $(this).children();
        titleUrl = data.attr('href')
        titleTrim = titleUrl.indexOf('?')
        title= titleUrl.substring(titleTrim,0)
        imgUrl= $('img', data).attr("src")
        searchList['titleUrl'] = title
        searchList['imgUrl'] = imgUrl
        fs.writeFileSync('./data/movieList.json', JSON.stringify(searchList)+'\n')
          //console.log("here is title and image link", movieList)
      })
    }
    res.send('Your movie search is here!')
  })

})

module.exports = router
