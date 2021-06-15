class ArtistEvent {
  static all = []

  constructor(artist_name, event_href){
    this.artist_name = artist_name;
    this.event_href = event_href;
  }

  static createArtistEvents(artistEventsData){
    let keys = Object.keys(artistEventsData)
    keys.forEach(key => {
      let artist_event_obj = artistEventsData[key]
      ArtistEvent.create(artist_event_obj)
    })
  }

  static create(data) {
    let artist_event = new ArtistEvent(data["artist_name"], data["event_href"])
    ArtistEvent.all.push(artist_event)

    return artist_event
  }

}

module.exports = ArtistEvent;