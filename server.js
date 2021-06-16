const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = require('express').Router()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/artist_event.routes')(app, router)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


