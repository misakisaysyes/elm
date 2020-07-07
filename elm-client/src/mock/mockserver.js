import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/login_sms', {code: 0, data: data.user})
Mock.mock('/login_pwd', {code: 0, data: data.user})
Mock.mock('/shopInfo', {code: 0, data: data.shopInfo})
Mock.mock('/shopRatings', {code: 0, data: data.shopInfo.shopOne.ratings})
Mock.mock('/shopGoods', {code: 0, data: data.shopInfo.shopOne.foods})
