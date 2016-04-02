var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();

router.post('/search',function (req, res){
  var str = Object.keys(req.body)
  //console.log( str,  'here is api req')

  // if(!str) {
  //   res.send("That is not correct name please try again")
  // }

  var url= 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+str+'&s=all'
  //console.log(req.body, url, 'here is search string')

  request(url, function (err, response, html) {

    if(!err) {
      var $ = cheerio.load(html);
      var searchRes =[]
      $('.primary_photo').each(function() {
        var  data, img, titleUrl, imgUrl;
        var searchList = {}
        data = $(this).children();
        titleUrl = data.attr('href')
        titleTrim = titleUrl.indexOf('?')
        title= titleUrl.substring(titleTrim,0)
        imgUrl= $('img', data).attr("src")
        searchList['titleUrl'] = 'http://www.imdb.com'+title
        searchList['imgUrl'] = imgUrl
        searchRes.push(searchList)
        fs.appendFileSync('./data/movieList.json', JSON.stringify(searchList)+'\n')
      })

      res.send(JSON.stringify(searchRes))
    }
  })
})

module.exports = router
