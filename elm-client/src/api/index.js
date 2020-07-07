/*
* 根据后台给的文档暴露接口
* */
import ajax from './ajax'

// 跨域配置
const BASE_URL = './api'

/* export const reqPwdLogin = (accountname, pwd, captcha) => {
  // 属性名和变量名一致时可省略属性名，这里的名字写法要参照后台给的接口
  ajax(BASE_URL, {accountname, pwd, captcha}, 'POST')
} */

// 用户名密码登录方式
// export const reqPwdLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

// 手机号验证码登录方式
export const reqSmsCaptcha = (phone) => ajax(BASE_URL + '/sendSmsCaptcha', {phone}, 'GET')
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone: phone, smsCaptcha: code}, 'POST')

export const reqShopInfo = () => {
  console.log('执行api index 模拟异步获取数据')
  // 模拟异步mock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ajax('/shopInfo'))
    }, 1500)
  })
}
export const reqShopRating = () => ajax('/shopRating')
export const reqShopGoods = () => ajax('/shopGoods')
