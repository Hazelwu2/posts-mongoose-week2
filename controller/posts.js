const { Post } = require('../model/posts')
const { filterUrlId } = require('../utils/index')
const {
  successHandle,
  errorHandle,
} = require('../utils/resHandle.js')
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

    if (!content || !name) errorHandle({ res })

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

const deleteAllPost = async (req, res) => {
  try {
    await Post.deleteMany()
    const data = await Post.find({})
    successHandle({ res, data })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const deletePost = async (req, res) => {
  try {
    const _id = await filterUrlId(req)
    const data = await Post.findByIdAndDelete({ _id })

    if (!data) {
      errorHandle({ res, message: '查無此 ID' })
      return
    }

    successHandle({
      res,
      statusCode: 200,
      message: '刪除成功',
      data
    })

  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const updatePost = async (req, res) => {
  try {
    const _id = filterUrlId(req)
    const { content, name, image, likes } = await handleBuffer(req)

    if (!content || !name) errorHandle({ res })

    const data = await Post.findByIdAndUpdate(
      { _id },
      { content, image, name, likes }
    )

    if (!data) errorHandle({ res })

    const list = await Post.find({ _id })

    if (list) {
      successHandle({ res, data: list })
    }

  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const isOptions = async (req, res) => {
  try {
    successHandle({ res })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}


module.exports = {
  getAllPost,
  createPost,
  deleteAllPost,
  deletePost,
  updatePost,
  isOptions
}