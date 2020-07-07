var express = require('express')
var router = express.Router()
var sms_util = require('../util/sms_util')

const md5 = require('blueimp-md5')
const svgCaptcha = require('svg-captcha')
const models = require('../db/model')
const UserModel = models.getModel('user')
const user = {}

/* 密码登录模块 */
router.post('/login_pwd', (req, res)=>{
  let name = req.body.name
  let pwd = md5(req.body.pwd)
  let captcha = req.body.captcha.toLowerCase()

  if(captcha !== req.session.captcha) {
    return res.send({code:1, msg: '验证码不正确'})
  }
  // 对比完验证码后删除本地保存的验证码
  delete req.session.captcha

  UserModel.findOne({name}, (err, user)=>{
    if(user){
      if(user.pwd !== pwd){
        res.send({code: 1, msg: '用户名或密码不正确！'})
      } else {
        req.session.userid = user._id
        res.send({code: 0, data: {_id: user._id, name: user.name, phone: user.phone, avatar: user.avatar}})
      }
    } else {
      let avater = ''
      let phone = ''
      const userModel = new UserModel({name, avater, phone, pwd})
      userModel.save((err, user) => {
        res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        req.session.userid = user._id
        let data = {_id: user._id, name: user.name, phone: user.phone, avatar: user.avatar}
        res.send({code: 0, data})
      })
    }
  })
})

/* 密码登录模块 */
// 获得图形验证码
router.get('/captcha', function (req, res) {
  let captcha = svgCaptcha.create({
    ignoreChars: '0o1l',
    noise: 2,
    color: true
  })
  req.session.captcha = captcha.text.toLowerCase()
  res.type('svg')
  res.send(captcha.data)
})

/* 短信验证码登录模块 */
// 1.获取验证码
router.get('/sendSmsCaptcha', (req, res) => {
  let phone = req.query.phone
  let smsCaptcha = sms_util.makeSmsCaptcha(6)
  user[phone] = smsCaptcha
  console.log('发送的验证码')
  console.log(smsCaptcha)
  console.log('收验证码的号码')
  console.log(phone)
  sms_util.sendSmsCaptcha(phone, smsCaptcha)
})

// 2.提交
router.post('/login_sms', (req, res) => {
  let phone = req.body.phone
  let smsCaptcha = req.body.smsCaptcha
  console.log('存储的验证码')
  console.log(user[phone])
  console.log(smsCaptcha)



  if(user[phone] !== smsCaptcha){
    res.send({code: 1, msg: '手机号或者验证码错误'})
  } else {
    UserModel.findOne({phone}, (err, user) => {
      if(user) {
        req.session.userid = user._id
        let data = {_id: user._id, name: user.name, phone: user.phone, avatar: user.avatar}
        res.send({code: 0, data})
      } else {
        let defaultAvatar = 'https://pic4.zhimg.com/v2-7635b259562da46aaf5154eee7d4a72f_r.jpg'
        console.log('不存在该用户，创建新用户')
        console.log(phone)
        let newUser = new UserModel({phone: phone, avatar: defaultAvatar})
        newUser.save((err, user)=>{
          req.session.userid = user._id
          let data = {_id: user._id, name: '', phone: user.phone, avatar: user.avatar}
          res.send({code: 0, data})
        })
      }
    })
  }
  delete user[phone]
})

module.exports = router;