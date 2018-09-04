import Fly from 'flyio'
import { $Message } from '/static/iview/message/index'

var fly = new Fly()
fly.config.baseURL = 'https://bvvy.ngrok.xiao miqiu.cn'
fly.config.headers = {'Content-Type': 'application/json'}
const Api = {
  get: (url, data, options) => api(url, data, Object.assign({}, {method: 'get'}, options)),
  post: (url, data, options) => api(url, data, Object.assign({}, {method: 'post'}, options))
}

const api = (url, data, options) => {
  return new Promise((resolve, reject) => {
    fly.request(url, data, options).then((res) => {
      if (res.status <= 200) {
        $Message({
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
      debugger
      const res = error.response
      if (res.status >= 400 && res.status < 500) {
        resolve(res.data)
      } else {
        resolve(res.data)
      }
    })
  })
}

export default Api
