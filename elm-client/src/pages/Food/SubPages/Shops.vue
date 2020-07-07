<script src="../../../store/index.js"></script>
<template>
  <div class="food__shop-subpage" >
    <ShopItem v-for="(value, name) in shopInfo" :key="name" :item="value"/>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import ShopItem from '../Components/ShopItem'
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['shopInfo']) // mapState中的state数据一般作为计算属性
  },
  mounted () {
    PubSub.subscribe('changeShopOrder', (msg, data) => {

    })
  },
  components: {
    ShopItem
  },
  methods: {
    quickSort (low, high, state, arr) {
      if (high < low) {
        return
      }

      let i = low
      let j = high
      let pivot = arr[low]
      let pkey = state.shopOrder[low]
      while (i < j) {
        for (; i < j && arr[j] >= pivot; j--) ;
        if (i < j) {
          state.shopOrder[i] = state.shopOrder[j]
          arr[i++] = arr[j]
        }

        for (; i < j && arr[i] <= pivot; i++) ;
        if (i < j) {
          state.shopOrder[j] = state.shopOrder[i]
          arr[j--] = arr[i]
        }
      }
      arr[j] = pivot
      state.shopOrder[j] = pkey

      quickSort(low, j - 1, state, arr)
      quickSort(j + 1, high, state, arr)
    }
}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
</style>
