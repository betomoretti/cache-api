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

module.exports.deleteAll = ({ service }) => async (req, res) => {
  await service.deleteAll()
  res.status(200).send()
}

module.exports.deleteById = ({ service }) => async (req, res) => {
  try {
    const entry = await service.deleteById(req.params.id)
    res.status(200).send(entry)
  } catch (error) {
    res.status(404).send()
  }
}

module.exports.update = ({ service }) => async (req, res) => {
  try {
    const entry = await service.update(req.params.id, req.body)
    res.status(200).send(entry)
  } catch (error) {
    res.status(404).send()
  }
}



