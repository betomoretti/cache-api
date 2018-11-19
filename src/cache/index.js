const router = require('express').Router()
const settings = require('../../config/settings')

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

const { getById } = require('./cacheController')
const helpers = require('./helpers')
const CacheService = require('./cacheService')
const model = require('./cacheModel')

const service = new CacheService({model, helpers})
const checkMiddleware = require('./cacheMiddleware').checkLimit({model, settings})

router.get('/:id', asyncMiddleware(checkMiddleware), getById({service}))


module.exports = router
