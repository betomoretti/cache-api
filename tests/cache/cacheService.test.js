const CacheService = require('../../src/cache/cacheService')

describe('Tests for cache service', () => {
  test('get method should return an entry when exists', async () => {
    const expectedResult = {data: 'random data'}
    const expectedId = 1
    const orFailMock = jest.fn(async () => await expectedResult)
    const mockModel = {findById: jest.fn((filter) => ({orFail: orFailMock}))}
    const service = new CacheService({ model: mockModel })
    const consoleInfoSpy = jest.spyOn(console, 'info')


    const result = await service.getById(expectedId)

    expect(result).toEqual(expectedResult)
    expect(mockModel.findById).toBeCalledWith(expectedId)
    expect(orFailMock).toBeCalled()
    expect(consoleInfoSpy).toHaveBeenCalled()

    consoleInfoSpy.mockRestore()
  })

  test('get method should return a new entry when does not exists', async () => {
    const expectedId = 1
    const expectedResult = {}
    const orFailMock = jest.fn(async () => await expectedResult)
    orFailMock.mockRejectedValueOnce(new Error('Async error'))
    const mockModel = {
      create: jest.fn(async () => await expectedResult),
      findById: () => {
        return {
          orFail: orFailMock
        }
      }
    }
    const service = new CacheService({ model: mockModel })
    const consoleInfoSpy = jest.spyOn(console, 'info')


    const result = await service.getById(expectedId)

    expect(consoleInfoSpy).toHaveBeenCalled()
    expect(mockModel.create).toBeCalled()
    expect(result).toEqual(expectedResult)

    consoleInfoSpy.mockRestore()
  })
})