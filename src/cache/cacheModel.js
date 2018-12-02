const mongoose = require('mongoose')

const cacheSchema = new mongoose.Schema({
  data: String
}, {
  timestamps: true
})

const Cache = mongoose.model('Cache', cacheSchema)


module.exports = Cache