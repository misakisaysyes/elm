const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/ele"; // 本地数据库地址
const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0
}

const db = mongoose.connect(url, options).then(
    () => {
        console.log('连接成功')
    },
    err => {
        console.log('连接失败')
    }
)

const userSchema = mongoose.Schema({name: String, avatar: String, phonenum: String, pwd: String})
const UserModel = mongoose.model('user', userSchema)

module.exports = {
    getModel(name, schema) {
      return mongoose.model(name)
    }
  }