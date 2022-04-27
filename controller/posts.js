const { Post } = require('../model/posts')
const {
  successHandle,
  errorHandle,
} = require('../utils/resHandle.js')
const ApiState = require('../utils/apiState')

const getAllPost = async (req, res, next) => {
  try {
    const data = await Post.find()

    successHandle({ res, data })

  } catch (error) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res })
  }
}

const createPost = async (req, res, next) => {
  try {
    const { content, name, image, likes } = req.body

    if (!content || !name) return errorHandle(ApiState.FIELD_MISSING, { res })

    const data = await Post.create({
      content,
      image,
      name,
      likes
    })

    if (data) {
      successHandle({
        res,
        statusCode: 201,
        message: '新增成功',
        data
      })
    }
  } catch (errors) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res, error })
  }
}

const deleteAllPost = async (req, res, next) => {
  try {
    await Post.deleteMany()
    const data = await Post.find({})
    successHandle({ res, data })
  } catch (error) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res })
  }
}

const deletePost = async (req, res, next) => {
  try {
    const _id = req.params.id

    const data = await Post.findByIdAndDelete({ _id: _id })
    console.log('.....asd..')
    console.log('data', data)

    if (!data) errorHandle(ApiState.DATA_NOT_EXIST, { res })

    successHandle({
      res,
      statusCode: 200,
      message: '刪除成功',
      data
    })

  } catch (error) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res, error })
  }
}

const updatePost = async (req, res, next) => {
  try {
    const _id = req.params.id

    const { content, name, image, likes } = req.body

    if (!content || !name) return errorHandle(ApiState.FIELD_MISSING, { res })
    const data = await Post.findByIdAndUpdate(
      { _id },
      { content, image, name, likes }
    )

    if (!data) return errorHandle(ApiState.DATA_NOT_EXIST, { res })

    const list = await Post.find({ _id })

    if (!list) return errorHandle(ApiState.DATA_NOT_EXIST, { res })

    successHandle({ res, data: list })

  } catch (error) {
    console.log(error)
    return errorHandle(ApiState.INTERNAL_SERVER_ERROR, { res, error })
  }
}

module.exports = {
  getAllPost,
  createPost,
  deleteAllPost,
  deletePost,
  updatePost,
}