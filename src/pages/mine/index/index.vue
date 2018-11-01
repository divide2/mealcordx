<template>
  <div class="mine">
    <div class="group">
      <div class="item">
        <i-avatar :size="'default'" :shape="'circle'">陈</i-avatar>
        <span class="name">名字</span>
      </div>
    </div>

    <div class="group">
      <navigator url="/pages/productList/main" class="item">
        <i-icon :type="'brush'" :size="20" :color="'#f02f45'"></i-icon>
        <span class="item-name">我的作品</span>
        <i-icon :type="'enter'" :size="14" :color="'#999999'" class="item-enter"></i-icon>
      </navigator>
      <div class="item">
        <i-icon :type="'activity'" :size="20" :color="'#f02f45'"></i-icon>
        <span class="item-name">我的订单</span>
        <i-icon :type="'enter'" :size="14" :color="'#999999'" class="item-enter"></i-icon>
      </div>
      <div class="item">
        <i-icon :type="'collection'" :size="20" :color="'#f02f45'"></i-icon>
        <span class="item-name">我的收藏</span>
        <i-icon :type="'enter'" :size="14" :color="'#999999'" class="item-enter"></i-icon>
      </div>
    </div>

    <bottom-menu></bottom-menu>
    <i-toast id="toast"></i-toast>
  </div>

</template>
<style scoped>
  .mine { padding: 20px 0; background-color: #f5f5f5; }
  .mine .group { padding: 0 20px; background-color: #fff; }
  .group + .group { margin-top: 10px; }
  .group .item { border-bottom: #f5f5f5; overflow: hidden; padding: 10px 0; }
  .item + .item { border-top: 1px solid #f5f5f5; }
  .item .item-name { display: inline-block; margin-left: 10px; font-size: 14px; }
  .item .item-enter { float: right; }
  .item .name { color: #999999; display: inline-block; margin-left: 20px; font-size: 14px; }

</style>
<script>
import bottomMenu from '@/components/bottomMenu'
// import Api from '@/utils/api'

export default {
  components: {
    bottomMenu
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
