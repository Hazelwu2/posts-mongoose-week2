// Controller
const {
  getAllPost,
  createPost
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
  else if (await deleteAllPostUrl(req)) console.log('here')
  else if (await deletePostUrl(req)) console.log('here')
  else if (await updatePostUrl(req)) console.log('here')
  else if (await optionsUrl(req)) console.log('here')
  else errorHandle({ res })
}

module.exports = app