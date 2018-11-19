module.exports = {
  db_limit: process.env.NODE_ENV === 'test' ? 2 : 4
}