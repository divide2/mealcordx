<template>
  <div class="message">
    <div class="message-list common-box">

    </div>

    <bottom-menu></bottom-menu>
    <i-toast id="toast"></i-toast>
  </div>

</template>
<style scoped>
  .message-list{}
</style>
<script>
import bottomMenu from '@/components/bottomMenu'

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
