<template>
  <div class="card" @click="navigateTo">
    <i-avatar :size="large" :shape="square" :src="">陈</i-avatar>
  </div>
</template>

<script>
import cImage from '@/components/cImage/index.vue'

export default {
  props: {
    id: {
      type: Number
    }
  },
  components: {cImage},
  methods: {
    navigateTo () {
      wx.navigateTo({
        url: `/pages/product/detail/main?id=${this.id}`
      })
    }
  }
}
</script>

<style scoped>

</style>
