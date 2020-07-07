<template>
  <div class="shop__order-container">
    <div class="order__banner">
      <img :src="shop.src" alt="img加载失败">
    </div>
    <div class="order__recommend">
      <div class="order__recommend-title">
        商家推荐
      </div>
      <div class="order__recommend-wrapper">
        <div class="order__recommend-content">
          <div class="recommend-item" v-for="item in 7" :key="item">
            <img class="item-bg" :src="shop.src"/>
            <div class="item-title">
              某道菜
            </div>
            <div class="item-sellcount">
              <span>月售</span>
              <span>好评率</span>
            </div>
            <div class="item-addprice">
              <span>价格</span>
              <Add/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShopGoodsList :shop="shop"/>
    <transition name="fade">
      <ShopCartFooter :shop="shop" v-show="!tconceal"/>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Add from './Tools/AddGoods/Add'
// 当viewport拉下来时，emit一个信号然后shopCartFooter隐藏起来
import ShopGoodsList from './Tools/ShopGoodsList'
import ShopCartFooter from './Tools/ShopCartFooter'
export default {
  props: {
    tconceal: Boolean,
    shop: Object
  },
  data () {
    return {
      tActiveTag: 0,
      tShowFooter: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initBScroll()
    })
  },
  methods: {
    initBScroll () {
      let orderRecommend = document.querySelector('.order__recommend-wrapper')
      let bannerScroll = new BScroll(orderRecommend, {
        scrollX: true,
        scrollY: false,
        click: true,
        disableMouse: false,
        disableTouch: false,
        mouseWheel: true
      })
      this.bannerScroll = bannerScroll
      this.bannerScroll.enable()
    }
  },
  components: {
    Add,
    ShopGoodsList,
    ShopCartFooter
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .shop__order-container {
    .order__banner {
      img {
        width: 100%;
        height: 280rem;
      }
    }
    .order__recommend {
      .order__recommend-title {
        padding: 0 15rem;
        margin-top: 15rem;
        height: 100rem;
        line-height: 100rem;
        font-size: 50rem;
        font-weight: bold;
        color: #333333;
      }

      .order__recommend-wrapper {
        height: 580rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        z-index: 980;

        .order__recommend-content {
          width: 3000rem;
          position: absolute;
          z-index: 978;
        }

        .recommend-item {
          margin: 10rem;
          border-radius: 10rem;
          border: 1rem #eee solid;
          float: left;

          .item-bg, .item-title, .item-sellcount, .item-addprice {
            line-height: 70rem;
          }

          .item-title, .item-sellcount, .item-addprice {
            padding: 0 15rem;
          }

          .item-bg {
            height: 300rem;
            width: 360rem;
            margin-bottom: 15rem;
          }

          .item-title {
            font-size: 50rem;
            font-weight: bold;
          }

          .item-sellcount {
            color: rgb(190, 190, 190);
          }

          .item-addprice {
            font-size: 50rem;
            font-weight: bold;
            color: #fe401e;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
</style>
