<template>
  <div class="bottom-menu">
    <i-tab-bar current="current" fixed="true" color="#f00">
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
      <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="消息"></i-tab-bar-item>
      <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="发布"></i-tab-bar-item>
      <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="商城"></i-tab-bar-item>
      <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home_img: '/static/image/bottomMenu/home.png'
    }
  }
}
</script>

<style lang="sass">
  .bottom-menu
    width: 100%
    position: fixed
    left: 0
    bottom: 0

</style>
