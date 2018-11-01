import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段会打包到原声小程序的app.json即整个小程序的全局配置
  config: {
    pages: [
      'pages/index/main',
      '^pages/mine/index/main',
      'pages/mine/star/main',
      'pages/message/index/main',
      'pages/message/chat/main',
      'pages/send/product/main',
      'pages/product/detail/main',
      'pages/product/edit/main',
      'pages/productList/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小影圈',
      navigationBarTextStyle: 'black'
    }
  }
}
