<template>
  <div class="productList" v-if="data">
    <div class="list">
      <div v-for="(item, index) in data.content" :key="index" class="list__item">
        <card
          :id="item.id"
          :name="item.name"
          :images="item.images[0]&&item.images[0].url"
          :readCount="item.readCount"
          :commentCount="item.commentCount"
          :starCount="item.starCount"
          :cdp="item.cdp"
          @getProductList="getProductList"></card>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .list__item { padding: 20px; background-color: #fff; margin-top: 10px; }

</style>
<script>
import mine from '@/api/mine'
import card from './_components/card'

export default {
  data () {
    return {
      data: null
    }
  },
  components: {
    card
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      mine.getMineProducts().then((res) => {
        this.data = res
        console.log(this.data.content)
      })
    }
  }
}
</script>
