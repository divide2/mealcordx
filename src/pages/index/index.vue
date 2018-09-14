<template>
  <div class="container">

    <div class="products">
      <div class="item" v-for="(item,index) in list" :key="index">
        <card :address="item.cdp" :tags="item.tags" :images="item.images"></card>
      </div>
    </div>

    <i-button type="primary" @click="test=!test">{{test}}</i-button>

    <bottom-menu></bottom-menu>

    <button open-type="getUserInfo">dianji</button>

    <i-toast id="toast"></i-toast>

  </div>
</template>
<style scoped lang="sass">
  .container
    padding: 20px 20px
    .products
      background-color: #fff
      width: 100%
      .item
        margin-bottom: 20px
    .bottom-menu
      width: 100%
      position: fixed
      left: 0
      bottom: 0
</style>
<script>
import card from '@/components/card/card'
import bottomMenu from '@/components/bottomMenu'
import Api from '@/utils/api'

export default {
  data () {
    return {
      list: [],
      motto: 'Hello World',
      userInfo: {},
      current: 'homepage',
      test: false
    }
  },
  components: {
    card, bottomMenu
  },
  methods: {
    find () {
      // 调用登录接口
      console.log(Api.get('/v1/product/find'))
      Api.get('v1/product/find').then((data) => {
        console.log('-------', data)
        this.list = data.content
      })
    }
  },
  created () {
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res)
          Api.post('/login/mp', {code: res.code}).then((res) => {
            wx.getUserInfo({
              withCredentials: true,
              success: (response) => {
                response.userInfo.skey = res.skey
                Api.post('/v1/mp/user', response.userInfo).then(data => {
                  console.log(data)
                })
              },
              fail: (error) => {
                console.log(error)
              }
            })
          })
          wx.getLocation({
            success: (res) => {
              wx.setStorage({
                key: 'position',
                data: res
              })
            }
          })
        } else {
          console.log('登录失败')
        }
      }
    })
    // 调用应用实例的方法获取全局数据
    this.find()
  }
}
</script>
