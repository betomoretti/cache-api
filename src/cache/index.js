const router = require('express').Router()

const { getById } = require('./cacheController')

const CacheService = require('./cacheService')
const model = require('./cacheModel')
const service = new CacheService({model})

router.get('/:id', getById({service}))

module.exports = router