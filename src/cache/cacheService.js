module.exports = class CacheService {
  constructor ({model}) {
    this.model = model
  }

  async getById(id) {
    let result;
    try {
      result = await this.model.findById(id).orFail()
      console.info('Cache HIT')
    } catch (e) {
      console.info('Cache MISS')
      result = await this.model.create({data: "bla"})
    }

    return result
  }
}