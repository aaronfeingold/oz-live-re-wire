module.exports = (app, router) => {
  const getArtistEvents = require('../controllers/artist_event.controller.js')
  
  /* GET home page. */
  router.get('/', async function(req, res, next) {
    return await getArtistEvents()
      .then(artist_events => {
        let json = JSON.stringify(artist_events)
        console.log(json)
        res.send(json)
      })
  });

  app.use('/api/artist-events', router)
}
