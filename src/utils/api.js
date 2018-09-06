import Fly from 'flyio'
import { $Toast } from '../../static/iview/base/index'

var fly = new Fly()
// fly.config.baseURL = 'https://bvvy.ngrok.xiaomiqiu.cn'
fly.config.baseURL = 'http://192.168.27.254:8081'
fly.config.headers = {'Content-Type': 'application/json'}

const Api = {
  get: (url, data, options) => api(url, data, Object.assign({}, {method: 'get'}, options)),
  post: (url, data, options) => api(url, data, Object.assign({}, {method: 'post'}, options))
}

const api = (url, data, options) => {
  return new Promise((resolve, reject) => {
    fly.request(url, data, options).then((res) => {
      if (res.status <= 200) {
        $Toast({
          content: '这是一条成功提醒',
          type: 'success'
        })
        resolve(res.data)
      } else if (res.status > 200 && res.status < 300) {
        resolve(res.data)
      } else {
        resolve(res.data)
      }
    }).catch((error) => {
      console.log(error, 'error response')
      const res = error.response
      if (res.status >= 400 && res.status < 500) {
        $Toast({
          content: '这是一条失败提醒',
          type: 'error'
        })
        resolve(res.data)
      } else {
        $Toast({
          content: '这是一条失败提醒',
          type: 'error'
        })
        resolve(res.data)
      }
    })
  })
}

export default Api
