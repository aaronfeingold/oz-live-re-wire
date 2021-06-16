module.exports = (app, router) => {
  const artistEventController = require('../controllers/artist_event.controller.js')
  
  /* GET home page. */
  router.get('/', async function(req, res, next) {
    const artist_events = await artistEventController.getArtistEvents()
    res.send(artist_events)
  });

  app.use('/api/artist-events', router)
}
