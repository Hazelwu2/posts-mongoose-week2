const {
  getMethod,
  postMethod,
  deleteMethod,
  patchMethod
} = require('../utils/httpMethod')

const getAllPostUrl = async (req) => {
  return req.url === '/posts' && getMethod(req)
}

const createPostUrl = async (req) => {
  return req.url === '/posts' && postMethod(req)
}

const deleteAllPostUrl = async (req) => {
  return req.url === '/posts' && deleteMethod(req)
}

const deletePostUrl = async (req) => {
  return req.url.startsWith('/posts') && deleteMethod(req)
}

const updatePostUrl = async (req) => {
  return req.url === '/posts' && patchMethod(req)
}

const optionsUrl = async (req) => {
  return optionsMethod(req)
}

module.exports = {
  getAllPostUrl,
  createPostUrl,
  deleteAllPostUrl,
  deletePostUrl,
  updatePostUrl,
  optionsUrl
}