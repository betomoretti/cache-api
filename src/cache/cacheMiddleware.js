module.exports.checkLimit = ({settings: { db_limit }, model}) => async (req, res, next) => {
  const cant = await model.count()
  if (cant >= db_limit) {
    const { _id } = await model.findOne().sort({created_at: -1})
    await model.deleteOne({ _id })
  }
  next()
}