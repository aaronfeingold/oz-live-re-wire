const cheerio = require('cheerio');
const puppeteer = require('puppeteer')

const url = 'https://www.wwoz.org/calendar/livewire-music'
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
}

function getArtistEvents() {
 puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(async page => {
    await page.goto(url, config);
    return await page.content();
  })
  .then(html =>{
    const $ = cheerio.load(html);
    const links = $('a');
    const artist_events = {}
    $(links).each(function(i, link){
      let event_href = $(link).attr('href')
      if (event_href != undefined && event_href.includes("events") == true){
          let artist_event = {}
          let artist_name = $(link).text().replace(/\s+/g, '')
          artist_event["artist_name"] = artist_name
          artist_event["event_href"] = event_href
          artist_events[i] = artist_event
        }
    });
    console.log(artist_events)
    return artist_events
    debugger;
  })
  .catch(console.error)
}

module.exports = getArtistEvents;