<template>
  <div class="shop-cart-footer">
    <div class="shop-cart--left">
      <div class="shop-cart-icon">
        <i class="iconfont icon-htmal5icon29"></i>
        <div class="buy-count"><Tag :type="'buycount'" :count="tool.totalCount"/></div>
        <!--到时候这里要换成类选择-->
        <div class="buy-left">
          <!-- foot-cost到时候要加left-on -->
          <div class="food-cost">{{!tool.totalPrice ? '未选购商品' : tool.totalPrice + '￥'}}</div>
          <div class="send-fee">另外需配送费￥{{shop.sendFee}} | 可自取</div>
        </div>
      </div>
    </div>

    <div class="shop-cart--right">
      <!-- buy-right到时候要加right-on -->
      <div :class="{'buy-right': true, 'right-on': !(shop.startFee > tool.totalPrice)}">{{shop.startFee > tool.totalPrice? `满${shop.startFee}元起送` : '去结算'}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Tag from '../../../../components/Tag/Tag'
export default {
  props: {
    shop: Object
  },
  computed: {
    ...mapState(['tool'])
  },
  data () {
    return {
      buyoff: true
    }
  },
  components: {
    Tag
  },
  methods: {

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../assets/css/util";
  .shop-cart-footer {
    width: 100%;
    height: 150rem;
    position: fixed;
    bottom: 0;
    z-index: 999;
    color: white;
    .shop-cart--left {
      background-color: #3d3c41;
      float: left;
      width: 68%;
      height: 100%;
      .shop-cart-icon {
        .iconfont {
          font-size: 86rem;
          background-color: #535257;
          color: #b2b2b2;
          padding: 20rem;
          border-radius: 80rem;
          position: relative;
          left: 25rem;
          border: 12rem #3d3c41 solid;
          margin: 0;
        }

        .icon-on {
          background-color: #06a8f3;
          color: white;
        }

        .buy-count {
          position: absolute;
          top: -42rem;
          left: 165rem;
          transform: translateX(-50%);
        }
      }
    }
    .shop-cart--right {
      background-color: #535257;
      color: #b2b2b2;
      font-size: 40rem;
      line-height: 150rem;
      text-align: center;
      float: left;
      width: 32%;
      height: 100%;
    }
  }

  .buy-left {
    height: 130rem;
    padding: 10rem 0;
    width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    float: right;
    color: #b2b2b2;
    .food-cost {
      font-size: 46rem;
      font-weight: normal;
    }
    .send-fee {
      font-size: 22rem;
    }
    .left-on {
      font-weight: bold;
      color: white;
    }
  }

  .shop-cart--right {
    .buy-right {
      font-size: 42rem;
      font-weight: normal;
      color: #b2b2b2;
    }
    .right-on {
      font-size: 46rem;
      font-weight: bold;
      color: white;
      background-color: #00B749
    }
  }

/*  .text-block-price, .text-block-info {
    display: inline-block;
    float: right;
    color: #b2b2b2;
    line-height: 150rem;
    padding: 0 25rem;
  }

  .text-block-price {
    font-size: 50rem;
    font-weight: bold;
  }

  .text-block-info {
    font-size: 40rem;
  }*/

</style>
