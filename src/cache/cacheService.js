module.exports = class CacheService {
  constructor ({model}) {
    this.model = model
  }

  async getById(id) {
    const result = await this.model.findById(id)
    if (result) console.info('Cache HIT')
    return result
  }
}