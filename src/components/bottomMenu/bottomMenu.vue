<template>
  <div class="bottom-menu">
    <!--<div class="item">-->
      <!--<img src="home_img" alt="">-->
      <!--<span>首页</span>-->
    <!--</div>-->
    <!--<div class="item">发布</div>-->
    <!--<div>我的</div>-->
    <i-tab-bar>
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
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



</style>
