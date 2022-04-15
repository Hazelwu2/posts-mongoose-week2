const mongoose = require('mongoose')
require('dotenv').config()

const DB = process.env.DB_URL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD
)


const connectDB = async () => {
  try {
    await mongoose.connect(DB)
    console.log('MongoDB 資料庫連接成功')
  } catch (error) {
    console.log('連接資料庫失敗：', error)
  }
}

module.exports = connectDB