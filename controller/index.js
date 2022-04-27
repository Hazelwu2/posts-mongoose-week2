const { successHandle } = require('../utils/resHandle.js')
const AppError = require('../utils/appError')

const isOptions = async (req, res, next) => {
  try {
    successHandle({ res, message: '使用 Options' })
  } catch (error) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res, error })
  }
}

module.exports = {
  isOptions
}