<template>
    <div class="c-image">
        <img :src="img_url" alt="" class="c-image__img" ref="img">
    </div>
</template>
<style scoped>
    .c-image { overflow: hidden; }
    .img--none { width: 100%; height: 100%; background-color: #eee; }
    /*.c-image__img { width: 100%; height: 100%; }*/
</style>
<script>
export default {
  props: {
    width: { // 宽，除了是值有可能是百分比
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    src: {
      type: String
    },
    ratio: {
      type: String
    }
  },
  data () {
    return {
      img_url: ''
    }
  },
  watch: {
    img_url (newValue, oldValue) {
      console.log(1)
    }
  },
  mounted () {
    this.getImgUrl()
    this.$nextTick(() => {
      console.log(11111111111111111111)
      console.log(this)
      console.log(this.$refs.img.offsetHeight)
    })
  },
  methods: {
    getImgUrl () {
      console.log(1)
      this.img_url = this.src + `?imageView2/1/w/${this.width}/h/${this.height}`
    }
  }
}
</script>
