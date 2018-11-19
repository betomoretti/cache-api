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

  async deleteAll() {
    return await this.model.deleteMany({})
  }

  async deleteById(id) {
    const { n } = await this.model.deleteOne({_id: id})
    if (!n) throw {}
  }

  async update(id, data) {
    const { n } = await this.model.updateOne({_id: id}, data)
    if (!n) throw {}
  }
}