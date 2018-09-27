<template>
  <i class="iconfont" :class="name" :style="{color:color, fontSize: size+'px'}"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  data () {
  }
}
</script>

<style scoped>

</style>
