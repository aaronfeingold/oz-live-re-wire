var express = require('express');
var router = express.Router();
const getArtistEvents = require('../scraper.js')
const ArtistEvent = require('../models/artist_event.model.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  const result = getArtistEvents();
  console.log(result)
  res.render('index', result)
});

module.exports = router;
