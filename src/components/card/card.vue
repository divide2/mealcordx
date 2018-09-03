<template>
  <div class="card">
    <div class="left">
      <img :src="avatar" alt="">
    </div>
    <div class="right">
      <div class="self-info">
        <div class="basic"><span class="name">{{userName}}</span>·<span>{{creditRatings}}</span><span class="address">{{address}}</span></div>
        <div class="tags"><span v-for="(item, index) in tags">{{item}}</span></div>
      </div>
      <div class="content">
        <p class="name">{{name}}</p>
        <p class="remarks">{{remarks}}</p>
        <div class="list">
          <div class="item" v-for="(item, index) in images"><img :src="item.url" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 位置
    address: {
      type: String
    },
    // 头像
    avatar: {
      type: String,
      default: '/static/image/default.jpeg'
    },
    // 图片数组
    images: {
      type: Array
    },
    // 用户名
    userName: {
      type: String,
      default: 'bvvy大王'
    },
    // 信用等级
    creditRatings: {
      type: String,
      default: '良好'
    },
    tags: {
      type: Array
    },
    name: {
      type: String,
      default: '作品名'
    },
    remarks: {
      type: String,
      default: '作者偷懒没有写描述～'
    }
  }
}
</script>

<style scoped lang="sass">
  .card
    display: flex
    .left
      flex: none
      img
        width: 50px
        height: 50px
    .right
      flex: 1
      padding-left: 10px
      .self-info
        font-size: 12px
        height: 50px
        position: relative
        .basic
          overflow: hidden
          .name
            font-weight: bold
          .address
            float: right
        .tags
          position: absolute
          bottom: 0
          span
            margin-right: 5px
            background-color: #FB681A
            color: #fff
            padding: 0 2px
            font-size: 10px
      .content
        padding-top: 10px
        overflow: hidden
        .name
          font-size: 12px
          font-weight: bold
        .remarks
          font-size: 12px
        .list
          margin-top: 10px
          overflow-x: scroll
          .item
            width: 100px
            height: 100px
            img
              width: 100%
              height: 100%



</style>
