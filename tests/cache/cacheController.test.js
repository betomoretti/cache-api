const app = require('../../src/app')
const CacheModel = require('../../src/cache/cacheModel')
const { setUpForTest } = require('./../../config/db')
const request = require('supertest')

describe('Cache controller', () => {
  beforeAll(() => {
    setUpForTest()
  })

  test('GET /cache should return 200 when the entry exists', async () => {
    const { _id } = await CacheModel.create({data: 'bla'})
    const { status, body: { _id: returnedId } } = await request(app).get(`/cache/${_id}`)
    expect(status).toBe(200)
    expect(returnedId).toEqual(_id.toString())
  })

  afterEach(async () => {
    await CacheModel.deleteMany({})
  })
})