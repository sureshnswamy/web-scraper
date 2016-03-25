var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Movie. To get data for your movie please type  "/scrape" in the address bar ');
});

module.exports = router;
