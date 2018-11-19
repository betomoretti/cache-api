module.exports.getById = ({ service }) => async (req, res) => {
  const entry = await service.getById(req.params.id)
  res.status(200).send(entry)
}