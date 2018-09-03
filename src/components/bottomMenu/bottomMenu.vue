<template>
  <div class="bottom-menu">
    <div class="item">
      <img src="home_img" alt="">
      <span>首页</span>
    </div>
    <div class="item">发布</div>
    <div>我的</div>
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
    position: fixed
    bottom: 0
    left: 0
    right: 0
    display: flex
    justify-content: space-between
    .item
    background-color: blue

</style>
