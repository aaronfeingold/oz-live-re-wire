const url = 'https://www.wwoz.org/calendar/livewire-music'
const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async () => {
  const result = await axios.get(url)
  return cheerio.load(result.data)
}