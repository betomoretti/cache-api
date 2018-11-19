const { checkLimit } = require('../../src/cache/cacheMiddleware')
const settings = require('../../config/settings')

describe('Check Limit', () => {
  test('Should do nothing when the limit is not reached', async () => {
    const nextMock = jest.fn(() => true)
    const modelMock = {
      count: jest.fn(async () => await 1)
    }
    await checkLimit({settings, model: modelMock})({}, {}, nextMock)

    expect(modelMock.count).toBeCalled()
    expect(nextMock).toBeCalled()
  })

  test('Should delete an entry when the limit is reached', async () => {
    const nextMock = jest.fn()
    const modelMock = {
      findOne: () => ({
        sort: () => 1
      }),
      deleteOne: jest.fn(async () => await true),
      count: jest.fn(async () => await 3)
    }

    await checkLimit({settings, model: modelMock})({}, {}, nextMock)

    expect(nextMock).toBeCalled()
    expect(modelMock.count).toBeCalled()
  })
})