<template>
  <div class="product">
    <i-panel title="概括">
      <i-input title="标题" autofocus placeholder="请输入作品标题" v-model="form.name" @change="test"></i-input>
      {{form.name}}
      <i-input title="描述" placeholder="请输入作品描述" v-model="form.remarks"></i-input>
    </i-panel>

    <i-panel title="上传图片">
      <div class="panel__content">
        <i-row>
          <i-col :span="8" v-for="image in images" :key="image">
            <div class="form__img__col radius4">
              <img :src="image" alt="" class="form__img">
            </div>
          </i-col>
          <i-col :span="8" @click="upload">
            <div class="form__img__col radius4">
              <i-icon type="add" size="40" color="#999999"></i-icon>
            </div>
          </i-col>
        </i-row>
      </div>
    </i-panel>

    <i-panel title="标签">
      <div class="panel__content">
        <i-tag
          class="tag"
          v-for="(item, index) in tags"
          :color="'blue'"
          :key="index"
          :name="item.name"
          :type="'border'"
          :checkable="true"
          :checked="item.checked"
          @change="item.checked=!item.checked">
          {{item.name}}
        </i-tag>
      </div>
    </i-panel>
    <i-button type="primary" @click="submitForm">提交</i-button>
    <i-toast id="toast"></i-toast>
  </div>

</template>
<style scoped>
  .tag { margin-right: 10px; }
  .panel__content { padding: 16px; margin-right: -10px; }
  .form__img { width: 100%; }
  .form__img__col { margin-bottom: 10px; margin-right: 10px; height: 110px; background-color: #f5f5f5; display: flex; justify-content: center; align-items: center; }
</style>
<script>
import tagApi from '@/api/tag'
import productApi from '@/api/product'

export default {
  components: {},
  data () {
    return {
      form: {
        name: '',
        images: [],
        tags: []
      },
      tags: [],
      images: [],
      id: ''
    }
  },
  mounted () {
    this.findTags().then(() => {
      this.getData()
    })
  },
  onLoad (options) {
    this.id = options.id
  },
  methods: {
    getData () {
      return productApi.detail(this.id).then((data) => {
        this.form = data
        this.images = this.form.images.map(item => item.url)
        this.setTags()
      })
    },
    setTags () {
      this.tags.forEach(item => {
        if (this.form.tags.includes(item.name)) {
          item.checked = true
        }
      })
    },
    findTags () {
      return tagApi.get(5).then((data) => {
        this.tags = data.map(item => ({name: item.name, checked: false}))
      })
    },
    upload () {
      wx.chooseImage({
        success: (res) => {
          this.images.push(...res.tempFilePaths)
        }
      })
    },
    submitForm () {
      this.form.tags = this.tags.filter(it => it.checked).map(item => item.name)
      this.form.images = this.images.map((item, index) => ({
        main: index === 0,
        url: item,
        orderNum: index
      }))
      productApi.edit(this.form).then((res) => {
        wx.navigateTo({
          url: `/pages/productList/main`
        })
      })
    },
    test (event) {
      console.log(event)
    }
  }
}
</script>
