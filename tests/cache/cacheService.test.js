const CacheService = require('../../src/cache/cacheService')

describe('Tests for cache service', () => {
  test('get method should return an entry when exists', async () => {
    const expectedResult = {data: 'random data'}
    const expectedId = 1
    const mockModel = {findById: jest.fn(async (filter) => await expectedResult)}
    const service = new CacheService({ model: mockModel })
    const consoleLogSpy = jest.spyOn(console, 'info')


    const result = await service.getById(expectedId)

    expect(result).toEqual(expectedResult)
    expect(mockModel.findById).toBeCalledWith(expectedId)
    expect(consoleLogSpy).toHaveBeenCalled()

    consoleLogSpy.mockRestore()
  })
})