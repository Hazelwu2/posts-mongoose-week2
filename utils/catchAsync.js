module.exports = (fn) => (req, res) => {
  fn(req, res).catch((err) => console.log(error))
}