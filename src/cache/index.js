const router = require('express').Router()

const { getById } = require('./cacheController')
const helpers = require('./helpers')
const CacheService = require('./cacheService')
const model = require('./cacheModel')
const service = new CacheService({model, helpers})

router.get('/:id', getById({service}))

module.exports = router