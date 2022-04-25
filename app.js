const express = require('express')
const logger = require('morgan')
const app = express()
const { errorHandle } = require('./utils/resHandle')
// Router
const postRouter = require('./routes/post')
const indexRouter = require('./routes/index')

app.use(logger('dev'))
app.use(express.json())

// Router
app.use('/posts', postRouter)
app.use('/', indexRouter)

// 400
app.use('*', (req, res) => {
  errorHandle({ res, message: '查無此路由' })
})

module.exports = app