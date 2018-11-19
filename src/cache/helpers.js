const movieQuotes = require('movie-quotes')

module.exports.generateRandomData = () => ({
  data: movieQuotes.random()
})