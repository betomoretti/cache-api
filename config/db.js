const mongoose = require('mongoose')

module.exports.setUp = () => {
  if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost:27017/cache')

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
    mongoose.connection.once('open', function() {
      console.log('Connected to db...')
    });
  }

  return mongoose
}

module.exports.setUpForTest = () => {
  mongoose.connect('mongodb://localhost:27017/cache_test')

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
  mongoose.connection.once('open', () => console.log('Connected to db...'))

  return mongoose
}

module.exports.mongoose = mongoose