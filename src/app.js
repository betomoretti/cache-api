const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/health', (req, res) => {
  res.status(200).send('')
})

module.exports = app