const {
  getAllPostUrl,
  createPostUrl,
  deleteAllPostUrl,
  deletePostUrl,
  updatePostUrl,
  optionsUrl
} = require('./routes/post')

const app = (req, res) => {
  if (getAllPostUrl) console.log('here')
  else if (createPostUrl) console.log('here')
  else if (deleteAllPostUrl) console.log('here')
  else if (deletePostUrl) console.log('here')
  else if (updatePostUrl) console.log('here')
  else if (optionsUrl) console.log('here')
  else handleError(req)
}

module.exports = app