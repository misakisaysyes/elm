<template>
    <!--模板必须要有根标签-->
    <div style="background-color: #eeeeee">
      <div class="shop-banner">
        <img :src="shop.src" alt="">
        <div class="more-info">
          查看更多商家信息
        </div>
      </div>

      <div class="shop-info">
        <div class="info-header">商家信息</div>
        <div class="info-content">
          描述描述描述描述描述描述描述描述描述描述描述描述
        </div>
      </div>

      <div class="shop-items">
        <van-cell-group>
          <van-cell title="单元格" value="内容" v-for="item in 10" :key="item"/>
        </van-cell-group>
      </div>

      <div class="shop-service">
        <button class="service"> 举报商家</button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    tconceal: Boolean,
    shop: Object
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
  .shop-banner, .shop-info, .shop-items, .shop-service {
    background-color: white;
    margin-bottom: 36rem;
  }

  .shop-banner {
    img {
      width: 100%;
      height: 512rem;
    }
    .more-info {
      height: 128rem;
      line-height: 128rem;
      text-align: center;
      font-size: 42rem;
    }
  }

  .shop-info {
    padding: 32rem;
    .info-header {
      display: block;
      width: 100%;
      line-height: 100rem;
      font-size: 56rem;
      font-weight: bold;
    }
    .info-content {
      font-size: 36rem;
    }
  }

  .shop-items {
    padding: 0 32rem;
    /deep/.van-cell {
      font-size: 45rem;
      line-height: 180rem;
    }
  }

  .shop-service {
    .service {
      height: 128rem;
      width: 100%;
      background-color: #06a8f3;
      border: none;
      font-size: 56rem;
      font-weight: bold;
      color: white;
    }
  }
</style>
