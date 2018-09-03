import Fly from 'flyio'

var fly = new Fly()
fly.config.baseURL = 'https://bvvy.ngrok.xiaomiqiu.cn'

const Api = {
  get: (url, data, header) => api(url, data, 'get')
}

const api = (url, data, method = 'get', headers) => {
  return new Promise((resolve, reject) => {
    fly.request({url, data, method, headers}).then((res) => {
      if (res.status <= 200) {
        resolve(res.data)
      } else if (res.status > 200 && res.status < 300) {
        resolve(res.data)
      } else {
        resolve(res.data)
      }
    }).catch((error) => {
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
