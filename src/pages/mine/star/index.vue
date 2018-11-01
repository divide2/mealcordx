<template>
  <div class="star" v-if="data">

  </div>

</template>
<style scoped>

</style>
<script>
import star from '@/api/star'

export default {
  components: {},
  data () {
    return {
      data: null
    }
  },
  methods: {
    getData () {
      star.get().then(data => {
        this.data = data
      })
    }
  }
}
</script>
