<template>
  <div class="product">
    <i-panel title="概括">
      <i-input title="标题" autofocus placeholder="请输入作品标题"></i-input>
      <i-input title="描述" placeholder="请输入作品描述"></i-input>
    </i-panel>
    <i-panel title="上传图片">
      <div v-for="(item, index) in form.images">
        <div class="box">
          <img :src="item" alt="" class="imgItem">
        </div>
      </div>
      <div @click="upload" class="box" v-if="form.images.length<=9">
        <i-icon type="add" size="40" color="#f00"></i-icon>
      </div>
    </i-panel>
    <i-panel title="标签">

    </i-panel>
    <i-button type="primary" @click="handleClick">提交</i-button>
  </div>

</template>
<style scoped lang="sass">
  .product
    .imageArr
      .box
        height: 60px
        width: 60px
        overflow: hidden
        .imgItem


</style>
<script>
import Api from '@/utils/api'

export default {
  components: {},
  data () {
    return {
      form: {
        name: '',
        images: []
      }

    }
  },
  methods: {
    upload () {
      wx.chooseImage({
        success: (res) => {
          debugger
          this.form.images = res.tempFilePaths
          console.log(this.form.images)
        }
      })
    },
    handleClick () {
      Api.post('/v1/product', this.form).then((res) => {
        wx.navigateTo({
          url: `/pages/index/main`
        })
      })
    }
  }
}
</script>
