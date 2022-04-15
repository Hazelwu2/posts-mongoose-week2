const getMethod = ({ method }) => method === 'GET'
const postMethod = ({ method }) => method === 'POST'
const deleteMethod = ({ method }) => method === 'DELETE'
const patchMethod = ({ method }) => method === 'PATCH'
const optionsMethod = ({ method }) => method === 'OPTIONS'

module.exports = {
  deleteMethod,
  getMethod,
  postMethod,
  patchMethod,
  optionsMethod
}