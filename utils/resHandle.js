const ApiState = require('./apiState')
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET POST OPTIONS DELETE PATCH'
}
const setHeader = (res, headers) => {
  Object.entries(headers).forEach(item => {
    res.header(item[0], item[1])
  })
}

const successHandle = ({
  res,
  statusCode = 200,
  status = ApiState.SUCCESS.status,
  message = ApiState.SUCCESS.message,
  data = {}
}) => {
  setHeader(res, headers)
  res.status(statusCode).json({
    status,
    message,
    data
  })
}

const errorHandle = ({
  res,
  statusCode = 400,
  status = ApiState.FAIL.status,
  message = ApiState.FAIL.message,
  err
}) => {
  setHeader(res, headers)
  res.status(statusCode).json({
    status,
    message,
  })
}

module.exports = {
  successHandle,
  errorHandle
}