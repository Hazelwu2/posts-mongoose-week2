const express = require('express')
const logger = require('morgan')
const app = express()
const { errorHandle } = require('./utils/resHandle')
const ApiState = require('./utils/apiState')
// Router
const postRouter = require('./routes/post')
const indexRouter = require('./routes/index')
// Controller
const globalErrorHandler = require('./controller/global-error')

app.use(logger('dev'))
app.use(express.json())

// Router
app.use('/posts', postRouter)
app.use('/', indexRouter)

// 無此路由
app.use('*', (req, res, next) => {
  errorHandle(ApiState.ROUTER_NOT_FOUND, { res })
})

// 處理錯誤
app.use(globalErrorHandler)

module.exports = app