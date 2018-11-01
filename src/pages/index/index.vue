<template>
  <div class="container">
    <button open-type="getUserInfo">ff</button>

    <div class="products">
      <div class="item" v-for="(item,index) in list" :key="index">
        <card :address="item.cdp" :tags="item.tags" :images="item.images" :id="item.id"></card>
      </div>
    </div>

    <bottom-menu></bottom-menu>

    <i-toast id="toast"></i-toast>

  </div>
</template>
<style scoped lang="sass">
  .container
    padding: 20px 20px
    background-color: #fff
    .products
      background-color: #fff
      width: 100%
      .item
        padding-top: 20px
        padding-bottom: 20px
    .bottom-menu
      width: 100%
      position: fixed
      left: 0
      bottom: 0
    .icon
      width: 1em
      height: 1em
      vertical-align: -0.15em
      fill: currentColor
      overflow: hidden
      font-size: 14px
      color: #f00

    .item + .item
      border-top: 1px solid #EEEEEE

</style>
<script>
import card from '@/components/card/card'
import bottomMenu from '@/components/bottomMenu'
import Api from '@/utils/api'
import productApi from '@/api/product'

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
      productApi.all({page: 1, size: 2}).then((data) => {
        this.list = data.content
      })
    }
  },
  mounted () {
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res)
          wx.getUserInfo({
            withCredentials: true,
            success: (response) => {
              response.userInfo.code = res.code
              Api.post('/login/mp', response.userInfo).then(data => {
                console.log(data)
              })
            },
            fail: (error) => {
              console.log(error)
            }
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
