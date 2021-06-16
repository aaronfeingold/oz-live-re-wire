var express = require('express');
var router = express.Router();
const getArtistEvents = require('../controllers/index.js')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const artist_events = await getArtistEvents()
  res.send(artist_events)
});

module.exports = router;
