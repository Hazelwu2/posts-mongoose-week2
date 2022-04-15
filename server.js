const http = require('http')
const app = require('./app')
const connectDB = require('./db.js')
const PORT = process.env.PORT || 3005

// 連接資料庫
connectDB()

const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server is runnging at locahost:${PORT}`)
})