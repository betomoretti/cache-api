const { mongoose } = require('../../config/db')

const cacheSchema = new mongoose.Schema({
  data: String
})

const Cache = mongoose.model('Cache', cacheSchema)


module.exports = Cache