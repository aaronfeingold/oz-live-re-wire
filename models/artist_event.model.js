class ArtistEvent {
  static all = []

  constructor(artist_name, event_href){
    this.artist_name = artist_name;
    this.event_href = event_href;
  }

  static createArtistEvents(artistEventsObject){
    let keys = Object.keys(artistEventsObject)
    keys.forEach(key => {
      let artist_event_obj = artistEventsObject[key]
      ArtistEvent.create(artist_event_obj)
    })
  }

  static create(data) {
    let artist_event = new ArtistEvent(data["artist_name"], data["event_href"])
    ArtistEvent.all.push(artist_event)

    return artist_event
  }

  static displayArtistEvents(){
    ArtistEvent.all.forEach(artist_event => artist_event.display())
  }

  display() {
    let p = `${this.artist_name} ${this.event_href}`
    console.log(p)
  }

}

module.export = ArtistEvent;