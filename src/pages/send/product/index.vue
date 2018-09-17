<template>
  <div class="product">
    <i-panel title="概括">
      <i-input title="标题" autofocus placeholder="请输入作品标题"></i-input>
      <i-input title="描述" placeholder="请输入作品描述"></i-input>
    </i-panel>
    <i-panel title="上传图片">
      <i-row>
        <i-col :span="8" v-for="(item,index) in form.images" :key="index">
          <img :src="item.url" alt="" class="imgItem">
        </i-col>
      </i-row>
      <i-col :span="8" @click="upload" class="box">
        <i-icon type="add" size="40" color="#f00"></i-icon>
      </i-col>
    </i-panel>
    <i-panel title="标签">
      <i-tag
        class="tag"
        v-for="(item, index) in tags"
        :color="'blue'"
        :key="index"
        :name="item.name"
        :type="'border'"
        :checkable="true"
        :checked="item.checked"
        @change="onChange(item,index,$event)">
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
    .tag
      margin-right: 5px

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
          for (let i = 0; i < res.tempFilePaths.length; i++) {
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
      debugger
      this.form.tags = this.tags.filter(x =>
        x.checked === true
      )
      Api.post('/v1/product', this.form).then((res) => {
        wx.navigateTo({
          url: `/pages/index/main`
        })
      })
    },
    onChange (item, index, event) {
      this.$set(item, 'checked', !item.checked)
    }
  }
}
</script>
