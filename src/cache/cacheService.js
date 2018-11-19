module.exports = class CacheService {
  constructor ({model, helpers}) {
    this.model = model
    this.helpers = helpers
  }

  async getById(id) {
    let result;
    try {
      result = await this.model.findById(id).orFail()
      console.info('Cache HIT')
    } catch (e) {
      console.info('Cache MISS')
      const generatedData = this.helpers.generateRandomData()
      result = await this.model.create(generatedData)
    }

    return result
  }

  async create(data) {
    await this.model.create(data)
  }

  async getAll() {
    return await this.model.find({})
  }
}