const {
  successHandle,
  errorHandle,
} = require('../utils/resHandle.js')

const isOptions = async (req, res, next) => {
  try {
    successHandle({ res, message: '使用 Options' })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

module.exports = {
  isOptions
}