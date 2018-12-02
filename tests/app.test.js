const request = require('supertest')
const { app } = require('../src/app')

describe('Test app', () => {
  test('GET / should return status 200', async () => {
    const { status } = await request(app).get('/health')
    expect(status).toBe(200)
  })
})