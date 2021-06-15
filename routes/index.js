var express = require('express');
var router = express.Router();
const getArtistEvents = require('../scraper.js')
const ArtistEvent = require('../models/artist_event.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  const result = getArtistEvents();
  ArtistEvent.createArtistEvents(result)
  let artist_events = ArtistEvent.all
  res.render('index', artist_events)
});

module.exports = router;
