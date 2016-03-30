var test = require('tape')
var tapSpec = require('tap-spec')
var request = require('supertest');
var fs = require ('fs')
var app = require('../app');


test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


var imdbApi = require('../routes/imdb-api')
var imdbSearch = require('../routes/imdb-search')


test('get status code 200 from index', function(t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
     // t.equal(res.text, "Welcome to Movie.", 'Index page responds')
      t.end()
    })
})

// test('get status code 200 from search', function(t) {
//   request(app)
//     .get('/search')
//     .expect(200)
//     .end(function(err, res) {
//       t.false(err)
//       t.equal(res.text, 'Your movie search is here!', 'Search page responds')
//       t.end()
//     })
// })

test('Correct movie data returned', function (t) {
  request(app)
    .get('/scrape')
    .expect(200)
    .end(function (err, res) {
      console.log(res.text)
      fs.readFile('./data/movie-data.json', 'utf8',function(err, res){
      var jsonRes = JSON.parse(res)
      t.deepEqual(Object.keys(jsonRes.movie[0]).length, 4, 'Returns total number of elements in the object')
      t.deepEqual(jsonRes.movie[0].title, 'Anchorman 2: The Legend Continues (2013)', 'The scraper returns correct movie title')
      t.deepEqual(jsonRes.movie[0].release, '19 December 2013 (New Zealand)', 'The scraper returns correct release date ')
      t.deepEqual(jsonRes.movie[0].rating, '6.3/10', 'The scraper returns the moive rating')
      t.deepEqual(jsonRes.movie[0].poster, 'http://ia.media-imdb.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', 'The Scraper returns poster image url')
      t.end();
    })
  });
});



