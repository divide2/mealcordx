<template>
  <div class="container">

    <div class="products">
      <div class="item" v-for="(item,index) in data.content" :key="index">
        <card :address="item.cdp" :tags="item.tags" :images="item.images"></card>
      </div>
    </div>

    <i-button type="primary" @click="test=!test">{{test}}</i-button>

    <bottom-menu></bottom-menu>

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
      motto: 'Hello World',
      userInfo: {},
      data: {},
      current: 'homepage',
      test: false
    }
  },
  components: {
    card, bottomMenu
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      Api.get('v1/product/find').then((res) => { this.data = res })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>
