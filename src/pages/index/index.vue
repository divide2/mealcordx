<template>
  <div class="container">

    <div class="products">
      <div class="item" v-for="(item,index) in data.content" :key="index">
        <card :address="item.cdp" :tags="item.tags" :images="item.images"></card>
      </div>
    </div>

    <i-button type="primary">dian</i-button>

    <i-tab-bar current="current" fixed color="#f00">
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="Home">首页</i-tab-bar-item>
      <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends">首页</i-tab-bar-item>
      <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice">首页</i-tab-bar-item>
      <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My">首页</i-tab-bar-item>
    </i-tab-bar>

  </div>
</template>

<script>
import card from '@/components/card/card'
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
  handleChange ({ detail }) {
    this.setData({
      current: detail.key
    })
  }
}
</script>

<style scoped lang="sass">
  .container
    padding: 20px 20px
    .products
      background-color: #fff
      width: 100%
      .item
        margin-bottom: 20px

</style>
