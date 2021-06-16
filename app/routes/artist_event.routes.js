module.exports = (app, router) => {
  const getArtistEvents = require('../controllers/artist_event.controller.js')
  const Promise = require('promise')
  /* GET home page. */
  router.get('/', async function(req, res, next) {
    return new Promise( () => {
      const artist_event_objs = getArtistEvents()
      let json = JSON.stringify(artist_event_objs)
      res.send(json)
    })
  });

  app.use('/api/artist-events', router)
}
