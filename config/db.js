const mongoose = require('mongoose')

module.exports.setUp = async () => {
  if (process.env.NODE_ENV !== 'test') {
    try {
      await mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/cache`)
      mongoose.connection.once('open', function() {
        console.log('Connected to db...')
      });
    } catch (error) {
      mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
      process.exit(1)
    }

  }
}

module.exports.setUpForTest = () => {
  mongoose.connect('mongodb://localhost:27017/cache_test')

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
  mongoose.connection.once('open', () => console.log('Connected to db...'))
}
