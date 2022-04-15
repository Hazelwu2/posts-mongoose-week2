const http = require('http')
const app = require('./app')
const connectDB = require('./db.js')

// 連接資料庫
connectDB()

const server = http.createServer(app)
server.listen(process.env.PORT || 3005)