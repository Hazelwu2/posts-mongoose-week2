// Controller
const {
  getAllPost,
  createPost,
  deleteAllPost,
  deletePost,
  updatePost,
  isOptions
} = require('./controller/posts')
// Router
const {
  getAllPostUrl,
  createPostUrl,
  deleteAllPostUrl,
  deletePostUrl,
  updatePostUrl,
  optionsUrl
} = require('./routes/post')
const { errorHandle } = require('./utils/resHandle')

const app = async (req, res) => {
  if (await getAllPostUrl(req)) getAllPost(req, res)
  else if (await createPostUrl(req)) createPost(req, res)
  else if (await deleteAllPostUrl(req)) deleteAllPost(req, res)
  else if (await deletePostUrl(req)) deletePost(req, res)
  else if (await updatePostUrl(req)) updatePost(req, res)
  else if (await optionsUrl(req)) isOptions(req, res)
  else errorHandle({ res })
}

module.exports = app