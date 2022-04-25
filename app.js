const express = require('express')
const logger = require('morgan')
const app = express()
// Router
const postRouter = require('./routes/post')

app.use(logger('dev'))
app.use(express.json())

// Router
app.use('/posts', postRouter)

module.exports = app