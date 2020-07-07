<template>
  <div class="header-top">
    <div class="header-top--up lazy-w">
      <slot name="left">this is header-top-up-left</slot>
      <slot name="right">this is header-top-up-right</slot>
    </div>
    <div class="header-top--down lazy-w">
      <van-button type="default" icon-prefix="iconfont" icon="search">{{recommendSearch}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendSearch: '德克士'
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  .header-top {
    position: sticky;
    top: -200rem;
    background-color: white;
    z-index: 999;

    .header-top--up {
      height: 200rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-top--down {
      height: 155rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .van-button {
        width: 100%;
        height: 100rem;
        line-height: 100rem;
        border-radius: 50rem;
        background-color: #eaeaea;

        font-size: 35rem;
        color: @footerNavFont-color;
      }
    }
  }
</style>
