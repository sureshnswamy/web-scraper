var test = require('tape')
var tapSpec = require('tap-spec')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


var imdbApi = require('/routes/imdb-api')
var imdbSearch = require('/routes/imdbSearch')

test('testing movie', function (t) {
  t.ok(true)
  t.end()
})
