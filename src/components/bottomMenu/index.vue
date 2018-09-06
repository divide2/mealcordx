<template>
  <div class="bottom">
    <div class="send" v-show="showModal">
      <navigator url="/pages/send/product/main">发布照片</navigator>
      <div class="close" @click="showModal=false">
        <i-icon type="delete" size="28" color="#000"></i-icon>
      </div>
    </div>
    <div class="bottom-menu">
      <i-tab-bar current="current" fixed="true" color="#f00" @change="handleChange">
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
        <i-tab-bar-item key="shop" icon="group" current-icon="group_fill" title="商城"></i-tab-bar-item>
        <i-tab-bar-item key="send" icon="group" current-icon="group_fill" title="发布"></i-tab-bar-item>
        <i-tab-bar-item key="message" icon="remind" current-icon="remind_fill" count="3" title="消息"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>
      </i-tab-bar>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    handleChange (res) {
      switch (res.mp.detail.key) {
        case 'homepage':
          break
        case 'shop':
          break
        case 'send':
          this.showModal = !this.showModal
          break
        case 'message':
          break
        case 'mine':
          wx.navigateTo({
            url: `/pages/mine/main`
          })
          break
        default:
          console.log(1)
      }
    }
  }
}
</script>

<style lang="sass">
  .bottom
    .send
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #fff
      z-index: 5
      .close
        position: absolute
        bottom: 20px
        left: 0
        right: 0
        text-align: center
    .bottom-menu
      width: 100%
      position: fixed
      left: 0
      bottom: 0
</style>
