const { User } = require('../models')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
