<template>
  <div>
    <van-cell title="超级会员" icon-prefix="iconfont" icon="crown" class="vip">
        <span class="vip-text--left">
          <slot name="notecontent"></slot>
        </span>
      <template #right-icon>
          <span class="vip-text--right">
            <slot name="tipcontent"></slot>
          </span>
        <van-icon name="arrow"/>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  .vip {
    height: 125rem;
    padding: 0 30rem;
    line-height: 125rem;
    border-radius: 15rem;
    box-shadow: 1px 1px 3px #f7f7f7, -1px -1px 3px #f7f7f7;

    background-image: linear-gradient(to right, #fdefd4, #fae5ba);
    color: @vipfontc;
    font-size: 40rem;
    font-weight: 700;

    .iconfont {
      line-height: 125rem;
      font-size: 40rem;
      color: #E1AA57;
    }

    .vip-text--right, .vip-text--left {
      font-size: 14px;
      font-weight: 500;
      color: @vipfontc;
    }

    .vip-text--left {
      float: left;
      flex: 1;
    }

    .van-cell__title {
      padding-left: 15rem;
      flex: none;
    }

    .van-icon {
      line-height: inherit;
      color: #aa9b7e;
    }
  }
</style>
