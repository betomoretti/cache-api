const { app, connectDB } = require('./src/app')

connectDB()
  .then(() => {
    app.listen(3000, () => console.log('Runinng on 3000...'))
  })


process.on('uncaughtException', (error) => {
  console.error(error)
  process.exit(2)
})
