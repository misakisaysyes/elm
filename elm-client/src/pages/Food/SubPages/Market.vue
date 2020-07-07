<template>
  <div class="food__shop-subpage">
    <ShopItem v-for="(item, idx) in shopInfo" :key="idx" :item="item" />
  </div>
</template>

<script>
import ShopItem from '../Components/ShopItem'
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['shopInfo']) // mapState中的state数据一般作为计算属性
  },
  components: {
    ShopItem
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
</style>
