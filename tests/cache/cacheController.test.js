const app = require('../../src/app')
const CacheModel = require('../../src/cache/cacheModel')
const { setUpForTest } = require('./../../config/db')
const request = require('supertest')

describe('Cache controller', () => {
  beforeAll(() => {
    setUpForTest()
  })

  test('GET /cache/:id should return 200 when the entry exists', async () => {
    const { _id } = await CacheModel.create({data: 'bla'})
    const { status, body: { _id: returnedId } } = await request(app).get(`/cache/${_id}`)
    expect(status).toBe(200)
    expect(returnedId).toEqual(_id.toString())
  })

  test('GET /cache/:id should return 200 when the entry does not exists', async () => {
    const { _id } = 'asdasd2'
    const { status, body: { _id: returnedId } } = await request(app).get(`/cache/${_id}`)
    expect(status).toBe(200)
    expect(returnedId).toBeTruthy()
  })

  test('GET /cache should return 200 and a list', async () => {
    const { status, body } = await request(app).get(`/cache`)
    expect(status).toBe(200)
    expect(body).toEqual([])
  })

  test('DELETE /cache/:id should return 200 when is found and deleted', async () => {
    const { _id } = await CacheModel.create({data: 'bla'})
    const { status, body } = await request(app).delete(`/cache/${_id}`)
    expect(status).toBe(200)
  })

  test('DELETE /cache/:id should return 404 when is not found', async () => {
    const _id = 'asdasd'
    const { status } = await request(app).delete(`/cache/${_id}`)
    expect(status).toBe(404)
  })

  test('DELETE /cache should return 200 when delete all', async () => {
    const { status } = await request(app).delete(`/cache`)
    expect(status).toBe(200)
  })

  test('POST /cache should return 200 when the entry is created', async () => {
    const data = {data: 'asdasd2'}
    const { status } = await request(app).post(`/cache`).send(data)
    expect(status).toBe(200)
    const list = await CacheModel.find({})
    expect(list.length).toBe(1)
  })

  afterEach(async () => {
    await CacheModel.deleteMany({})
  })
})