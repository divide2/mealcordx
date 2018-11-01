<template>
  <div class="buttom-option">
    <div class="option-item" @click="option('star')">
      <icon :name="'icon-star'" :size="20"></icon>
      <span>收藏</span>
      <input type="text" class="option-item--comment" cursor-spacing="20">
    </div>

  </div>
</template>
<style scoped>
  .buttom-option { position: fixed; bottom: 0; left: 0; right: 0; padding: 20px; font-size: 12px; background-color: #fff;}
  .option-item { display: inline-block; }
  .option-item--comment { background-color: #f5f5f5; display:inline-block;}
</style>
<script>
import icon from '@/components/icon/icon'
import star from '@/api/star'

export default {
  props: {
    toId: Number,
    star: Boolean,
    type: String,
    toName: String
  },
  components: {icon},
  data () {
    return {}
  },
  methods: {
    option (type) {
      switch (type) {
        case 'star':
          if (star) {
            star.delete({
              id: this.toId
            })
          } else {
            star.get({
              toId: this.toId,
              toName: this.toName,
              type: this.type
            })
          }
          break
      }
    }
  }
}
</script>
