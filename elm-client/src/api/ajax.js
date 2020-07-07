/*
* ajax模块写法
* 1  import axios from 'axios'
* 2  export default function ajax (url//请求地址, data={}//参数对象, type='GET'//请求方式) { // 默认导出ajax函数
* 3  写get和post的请求方法
* 4  promise// promise(function(relove, reject){}).then(function(response){resolve(response)}).catch(function(error){reject(error)})
*/

import axios from 'axios'
// axios.defaults.baseURL = '/api'
export default function ajax (url, data = {}, type = 'GET') {
  console.log('调用ajax')
  console.log(data)

  // 外层promise用来简化链式调用
  return new Promise(function (resolve, reject) {
    let promise
    type = type.toUpperCase()
    if (type === 'GET') {
      let queryStr = ''
      Object.keys(data).forEach(key => {
        queryStr += (key + '=' + data[key] + '&')
      })
      if (queryStr !== '') {
        queryStr = queryStr.substring(0, queryStr.lastIndexOf('&'))
        console.log('查询字符串')
        console.log(queryStr)
        console.log(url)
        url += ('?' + queryStr)
      }
      promise = axios.get(url)
    } else if (type === 'POST') {
      console.log(url)
      promise = axios.post(url, data)
    }

    promise.then(function (response) {
      resolve(response)
    }).catch(function (error) {
      reject(error)
    })
  })
}
