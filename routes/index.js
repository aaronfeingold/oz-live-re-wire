var express = require('express');
var router = express.Router();
const getArtistEvents = require('../controllers/index.js')
const ArtistEvent = require('../models/artist_event.model')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const artist_events = await getArtistEvents()
  res.render('index', artist_events)
});

module.exports = router;
