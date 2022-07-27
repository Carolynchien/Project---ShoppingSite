const mongoose = require('mongoose')

mongoose
  .connect(`mongodb://127.0.0.1:27017/productDatabase`)
  .then(() => {
    console.log('Successfully connected to MongoDb')
  })
  .catch((e) => {
    console.log(`connection error`, e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db
