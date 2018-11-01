<template>
  <div class="product-detail" v-if="data">
    <div class="main common-box">
      <div class="product-name">{{data.name}}</div>

      <div class="user-info">
        <c-image :width="50" :height="50"></c-image>
        <div class="user-info--right">
          <p class="user-info__main">
            <span class="user-name">{{data.fromName}}</span>
          </p>
          <p class="user-info__detail"></p>
        </div>
      </div>

      <div class="remark">
        {{data.remarks}}
      </div>

      <div class="img-list">
        <div v-for="(item,index) in data.images" :key="index" class="img-list__item">
          <img :src="item.url" alt="">
        </div>
      </div>
    </div>

    <bottom-option></bottom-option>
  </div>
</template>
<style scoped>
  .product-name { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
  .user-info { display: flex; align-items: center; margin-bottom: 10px; }
  .user-info--right { flex: 1; margin-left: 20px; }
  .user-name { font-size: 14px; font-weight: bold; }
  .img-list__item { margin-top: 15px; }
  .img-list__item img { width: 100%; }
  .remark { font-size: 14px; }
</style>
<script>
import productApi from '@/api/product'
import cImage from '@/components/cImage/index'
import bottomOption from './_components/buttomOption'

export default {
  components: {cImage, bottomOption},
  data () {
    return {
      id: '',
      data: null
    }
  },
  onLoad (options) {
    this.id = options.id
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      productApi.detail(this.id).then(data => {
        this.data = data
      })
    }
  }
}
</script>
