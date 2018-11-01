<template>
  <div class="bottom">
    <div class="send" v-show="showModal">
      <i-row class="list">
        <i-col span="8" i-class="col-class" @click="showModal=false" class="item">
          <navigator url="/pages/send/product/main">
            <div class="option">
              <icon :name="'icon-upload-project'" :color="'#FB681A'" :size="32"></icon>
              <p class="name">发布作品</p>
            </div>
          </navigator>
        </i-col>
        <i-col span="8" i-class="col-class" @click="showModal=false" class="item">
          <navigator url="/pages/send/product/main">
            <div class="option">
              <icon :name="'icon-upload-project'" :color="'#FB681A'" :size="32"></icon>
              <p class="name">发布作品</p>
            </div>
          </navigator>
        </i-col>
      </i-row>

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
import icon from '../icon/icon.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  components: {
    icon
  },
  methods: {
    handleChange (res) {
      switch (res.mp.detail.key) {
        case 'homepage':
          wx.navigateTo({
            url: `/pages/index/main`
          })
          break
        case 'shop':
          break
        case 'send':
          this.showModal = !this.showModal
          break
        case 'message':
          wx.navigateTo({
            url: `/pages/message/index/main`
          })
          break
        case 'mine':
          wx.navigateTo({
            url: `/pages/mine/index/main`
          })
          break
        default:
          console.log(1)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .bottom
    .send
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #fff
      z-index: 5
      .list
        width: 100%
        bottom: 100px
        left: 0
        position: absolute
        .item
          text-align: center
          .option
            font-size: 12px
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
