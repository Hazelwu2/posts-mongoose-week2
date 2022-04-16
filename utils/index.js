const filterUrlId = ({ url }) => {
  return [...url.split('/')].pop()
}

module.exports = {
  filterUrlId
}