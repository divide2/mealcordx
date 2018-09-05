<template>
  <div class="container">

    <div class="products">
      <div class="item" v-for="(item,index) in data.content" :key="index">
        <card :address="item.cdp" :tags="item.tags" :images="item.images"></card>
      </div>
    </div>

    <i-button type="primary">dian</i-button>

    <bottom-menu></bottom-menu>

    <i-toast id="toast"></i-toast>

    <!--<div class="bottom-menu">-->
      <!--<i-tab-bar current="current" fixed="true" color="#f00">-->
        <!--<i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>-->
        <!--<i-tab-bar-item key="group" icon="service" current-icon="service_fill" title="商城"></i-tab-bar-item>-->
        <!--<i-tab-bar-item key="group" icon="send" current-icon="send" title="发布"></i-tab-bar-item>-->
        <!--<i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="消息"></i-tab-bar-item>-->
        <!--<i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>-->
      <!--</i-tab-bar>-->
    <!--</div>-->
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
// import bottomMenu from '@/components/bottomMenu'
import Api from '@/utils/api'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      data: {},
      current: 'homepage'
    }
  },
  components: {
    card
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      Api.get('/v1/product/find').then((res) => { this.data = res })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  handleChange ({detail}) {
    this.setData({
      current: detail.key
    })
  }
}
</script>
