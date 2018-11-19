module.exports.getById = ({ service }) => async (req, res) => {
  const entry = await service.getById(req.params.id)
  res.status(200).send(entry)
}

module.exports.getAll = ({ service }) => async (req, res) => {
  const entry = await service.getAll()
  res.status(200).send(entry)
}

module.exports.create = ({ service }) => async (req, res) => {
  const entry = await service.create(req.body)
  res.status(200).send(entry)
}



