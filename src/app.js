const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const cacheRoutes = require('./cache')
const { setUp } = require('../config/db')

setUp()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/cache', cacheRoutes)

app.get('/health', (req, res) => {
  res.status(200).send('')
})

module.exports = app