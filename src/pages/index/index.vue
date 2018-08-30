<template>
  <div class="container">

    <div class="products">
      <div class="list">
        <div class="item" v-for="(item,index) in data.content">
          <card :position="item.cdp"></card>
        </div>
      </div>
    </div>


    <bottom-menu></bottom-menu>

  </div>
</template>

<script>
import card from '@/components/card/card'
import bottomMenu from '@/components/bottomMenu'

const baseURL = process.env.API_BASE_URL
var Fly = require('flyio')
var fly = new Fly()
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      data: {}
    }
  },
  components: {
    card, bottomMenu
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      fly.get(`${baseURL}/v1/product/find`).then((res) => { this.data = res.data })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang="sass">
  .container
    padding: 20px 20px
    .products
      background-color: #fff

</style>
