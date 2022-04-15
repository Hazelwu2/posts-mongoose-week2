const { Post } = require('../model/posts')
const {
  successHandle,
  errorHnadle,
  errorHandle
} = require('../utils/resHandle.js')
const catchAsync = require('../utils/catchAsync')
const { handleBuffer } = require('../utils/chunkHandle')

const getAllPost = async (req, res) => {
  try {
    const data = await Post.find()
    successHandle({ res, data })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const createPost = async (req, res) => {
  try {
    const { content, name, image, likes } = await handleBuffer(req)

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
    console.log('發生錯誤', errors)
    errorHandle({
      res,
      ...errors
    })
  }
}


module.exports = {
  getAllPost,
  createPost
}