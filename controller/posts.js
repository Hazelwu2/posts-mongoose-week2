const { Post } = require('../model/posts')
const {
  successHandle,
  errorHandle,
} = require('../utils/resHandle.js')


const getAllPost = async (req, res, next) => {
  try {
    const data = await Post.find()
    successHandle({ res, data })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const createPost = async (req, res, next) => {
  try {
    const { content, name, image, likes } = req.body

    if (!content || !name) return errorHandle({ res })

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

const deleteAllPost = async (req, res, next) => {
  try {
    await Post.deleteMany()
    const data = await Post.find({})
    successHandle({ res, data })
  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const deletePost = async (req, res, next) => {
  try {
    const _id = req.params.id
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

const updatePost = async (req, res, next) => {
  try {
    const _id = req.params.id

    const { content, name, image, likes } = req.body

    if (!content || !name) return errorHandle({ res })

    const data = await Post.findByIdAndUpdate(
      { _id },
      { content, image, name, likes }
    )

    if (!data) return errorHandle({ res })

    const list = await Post.find({ _id })

    if (list) {
      successHandle({ res, data: list })
    }

  } catch (error) {
    console.log(error)
    errorHandle({ res })
  }
}

const isOptions = async (req, res, next) => {
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