const apiState = require('../utils/apiState')

const sendErrorDev = (err, res) => {
  // console 顯示錯誤訊息
  console.log(err.stack)

  // Dev 環境會特別顯示 Error 印出詳細錯誤訊息
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  })
}

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
}

const isDev = () => (process.env.NODE_ENV === 'development')
const isProduction = () => (process.env.NODE_ENV === 'production')

// 捕捉到錯誤
module.exports = (err, req, res, next) => {

  err.statusCode = err.statusCode || 500
  err.status = err.status || apiState.INTERNAL_SERVER_ERROR.status

  let customeMessage = apiState.INTERNAL_SERVER_ERROR
  if (err instanceof SyntaxError) customeMessage = apiState.SYNTAX_ERROR
  if (err instanceof ReferenceError) customeMessage = apiState.REFERENCE_ERROR
  if (err instanceof TypeError) customeMessage = apiState.TypeError
  else
    err.message = isDev ?
      err.message || customeMessage.message
      : customeMessage.message

  // Dev 環境給詳細 Log
  isDev && sendErrorDev(err, res)
  // Production 環境給簡易 Log
  isProduction && sendErrorProd(err, res)

}