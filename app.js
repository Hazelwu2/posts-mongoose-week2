const express = require('express')
const logger = require('morgan')
const app = express()
const { errorHandle, ApiResponse } = require('./utils/resHandle')
const ApiState = require('./utils/apiState')
console.log(ApiState.ROUTER_NOT_FOUND)
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
  errorHandle({ res, detail: ApiState.ROUTER_NOT_FOUND })
})

// 處理錯誤
app.use(globalErrorHandler)

module.exports = app