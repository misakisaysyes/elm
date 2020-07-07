<template>
  <!--模板必须要有根标签-->
  <div class="cn-wrapper" :style="{backgroundImage: 'url(' + bg_imgurl + ')', backgroundSize: '100% 100%'}">
    <div class="cn-bgcover">
      <img :src="show_imgurl" alt="" class="cn-showimg">
      <div class="cn-content">
        <span class="cn-shopname">{{shop_name}}</span>
        <span class="cn-shopinfo">{{shop_des}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg_imgurl: String,
    show_imgurl: String,
    shop_name: String,
    shop_des: String
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
  .cn-wrapper {
    height: 410rem;
    width: 500rem;
    border-radius: 25rem;
    float: left;
    margin: 5rem;

    .cn-bgcover {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 25rem;
      position: relative;
      z-index: 1;

      .cn-showimg {
        position: absolute;
        height: 90rem;
        width: 90rem;
        top: 57%;
        left:35rem;
        transform: translateY(-65%);
        z-index: 100;
      }

      .cn-content {
        position: absolute;
        width: 100%;
        height: 43%;
        padding: 0 35rem;
        background-color: rgba(255, 255, 255, 0.9);
        bottom: 0;
        z-index: 10;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        .cn-shopname {
            margin-top: 20rem;
            font-size: 42rem;
            font-weight: 600;
            color: #333333;
        }
        .cn-shopinfo {
            color:coral;
        }
      }
    }
  }
</style>
