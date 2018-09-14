<template>
  <div class="product">
    <i-panel title="概括">
      <i-input title="标题" autofocus placeholder="请输入作品标题"></i-input>
      <i-input title="描述" placeholder="请输入作品描述"></i-input>
    </i-panel>
    <i-panel title="上传图片">
      <!--<div v-for="(item,index) in form.images" :key="index">-->
      <!--<img :src="item.url" alt="" class="imgItem">-->
      <!--</div>-->
      {{form.images[0].url}}
      <div @click="upload" class="box" v-if="form.images.length<=9">
        <i-icon type="add" size="40" color="#f00"></i-icon>
      </div>
    </i-panel>
    <i-panel title="标签">
      <i-tag
        color="blue"
        v-for="(item,index) in tags"
        :key="index"
        name="item.name"
        type="border"
        checkable="true"
        checked="item.checked"
        @click="test">
        {{item.name}}
      </i-tag>
    </i-panel>
    <i-button type="primary" @click="handleClick">提交</i-button>
    <i-toast id="toast"></i-toast>
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
        images: [],
        tags: []
      },
      tags: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      Api.get('/v1/tag/count/5').then((res) => {
        this.tags = res
        for (let i; i < this.tags.length; i++) {
          this.tags[i].checked = false
        }
      })
    },
    upload () {
      wx.chooseImage({
        success: (res) => {
          console.log('----------', res)
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            console.log(res.tempFilePaths[i])
            this.form.images[i] = {
              main: i === 0,
              url: res.tempFilePaths[i],
              orderNum: i
            }
          }
          console.log('-----------', this.form)
        }
      })
    },
    handleClick () {
      Api.post('/v1/product', this.form).then((res) => {
        wx.navigateTo({
          url: `/pages/index/main`
        })
      })
    },
    test () {
      console.log(1)
    }
  }
}
</script>
