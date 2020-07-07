<template>
  <div>
    <div class="order__header">
      <span>我的订单</span>
      <span>其他订单</span>
    </div>
    <div class="order__content">
      <div class="order__content-bar">
        <span>我的订单</span>
        <i class="iconfont icon-sousuo"></i>
      </div>
      <OrderItem/>
    </div>
  </div>
</template>

<script>
import OrderItem from '../../components/OrderItem/OrderItem'
export default {
  components: {
    OrderItem
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .order__header {
    width: 96%;
    padding: 0 2%;
    height: 150rem;
    line-height: 150rem;
    font-size: 45rem;
    position: sticky;
    top: -0.5rem;
    background-color: white;
    span {
      &:first-child {
        margin-left: 50%;
        display: inline-block;
        transform: translateX(-50%);
      }
      &:last-child {
        margin-left: 12%;
      }
    }
  }

  .order__content {
    height: 2000rem;
    background-image: linear-gradient(to top, #eee 85%, white);
    .order__content-bar {
      width: 94%;
      padding: 0 3%;
      height: 150rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
          font-size: 60rem;
          font-weight: 600;
      }
      .iconfont {
        font-size: 60rem;
        color: #7d7d7d;
      }
    }
  }
</style>
