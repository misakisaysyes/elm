<template>
  <div class="nav-top-bar" @click="onClickNav()">
    <van-tabs v-model="t_activetag">
      <van-tab title="风味推荐"></van-tab>
      <van-tab title="发现好菜"></van-tab>
      <van-tab title="果蔬商超"></van-tab>
      <van-tab title="到店自取"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这里的vtag需要传递
      t_activetag: 0
    }
  },
  methods: {
    onClickNav () {
      if (event.target.innerText === '风味推荐') {
        this.$emit('func', 'shops')
      }
      if (event.target.innerText === '发现好菜') {
        this.$emit('func', 'dish')
      }
      if (event.target.innerText === '果蔬商超') {
        this.$emit('func', 'market')
      }
      if (event.target.innerText === '到店自取') {
        this.$emit('func', 'selfget')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .nav-top-bar {
    position: sticky !important;
    top: 155rem !important;
    z-index: 999;

    /deep/ .van-tab {
      font-size: 50rem;
      color: @fontc-dark;
    }

    /deep/ .van-tab--active {
      color: #06a8f3
    }

    /deep/ .van-cell {
      font-size: 50rem;
      height: 155rem;
      line-height: 155rem;
      border-bottom: 0.75rem #dddddd solid;
    }

    /deep/ [class*=van-hairline]::after {
      border: none;
    }

    /deep/ .van-tabs__wrap, .van-hairline--top-bottom {
      margin: 0 auto;
      height: 155rem;
    }

    /deep/ .van-tabs__line {
      width: 70rem;
      height: 5rem;
      border-radius: 5rem;
      background-color: #06a8f3;
    }
  }
</style>
