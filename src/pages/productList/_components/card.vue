<template>
  <div class="card">
    <div class="card__content">
      <div class="card__left radius4"><img :src="images" alt=""></div>
      <div class="card__right">
        <p class="info__name">{{name}}</p>
        <p class="info_tags"></p>
        <p class="info__other"><span>{{date}}</span> <span class="info__other--right">评论:{{commentCount}}  收藏:{{starCount}}  浏览:{{readCount}}</span>
        </p>
      </div>
    </div>
    <div class="card__options">
      <span class="card__option radius4" @click="modify">编辑</span>
      <span class="card__option radius4" @click="show_cancel=true">删除</span>
    </div>

    <i-modal :visible="show_cancel" @cancel="show_cancel=false" @ok="del">
      <div>确定要删除吗?</div>
    </i-modal>
  </div>
</template>
<style scoped lang="scss">
  .card__content { display: flex; }
  .card__left { width: 80px; height: 80px; }
  .card__right { flex: 1; margin-left: 10px; display: flex; flex-direction: column; justify-content: space-between; }
  .info__name { font-size: 12px; font-weight: bold; }
  .info__other { font-size: 10px; color: #999999; }
  .info__other--right { float: right; }
  .card__options { text-align: right; margin-top: 10px; padding-top: 10px; border-top: 1px solid #f5f5f5; font-size: 12px; }
  .card__option { padding: 5px 7px; border: 1px solid #f5f5f5; display: inline-block; margin-left: 10px; }
</style>
<script>
import productApi from '@/api/product'

export default {
  props: {
    id: {
      type: Number
    },
    images: { // 图片
      type: String
    },
    name: { // 标题名字
      type: String
    },
    cdp: { // 定位
      type: String
    },
    commentCount: { // 评论数量
      type: Number,
      default: 0
    },
    starCount: { // 收藏数量
      type: Number,
      default: 0
    },
    readCount: { // 阅读量
      type: Number,
      default: 0
    },
    date: { // 发表日期
      type: String,
      default: '2018年5月3日'
    }
  },
  data () {
    return {
      show_cancel: false
    }
  },
  methods: {
    del () {
      productApi.delete({id: this.id}).then(data => {
        this.show_cancel = false
        this.$emit('getProductList')
      })
    },
    modify () {
      wx.navigateTo({
        url: '/pages/product/edit/main?id=' + this.id
      })
    }
  }
}
</script>
