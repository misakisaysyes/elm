<template>
    <!--模板必须要有根标签-->
  <div class="ct-wrapper" :style="{backgroundImage: 'url(' + bg_imgurl + ')', backgroundSize: '100% 100%'}">
    <div class="ct-bgcover">
      <Tag :type="'top'" :text="'top20'" style="position: absolute; top:185rem; left:50rem; z-index:99999;"/>
      <img :src="show_imgurl" alt="" class="ct-showimg">
      <div class="ct-content">
        <span class="ct-shopname">{{shop_name}}</span>
        <span class="ct-shopinfo">{{shop_des}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../../Tag/Tag'
export default {
  props: {
    bg_imgurl: String,
    show_imgurl: String,
    shop_name: String,
    shop_des: String
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
  .ct-wrapper {
    height: 410rem;
    width: 500rem;
    border-radius: 25rem;
    float: left;
    margin: 5rem;

    .ct-bgcover {
      overflow: auto;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 25rem;
      position: relative;
      z-index: 1;

      .ct-showimg {
        position: absolute;
        height: 130rem;
        width: 130rem;
        bottom: 37rem;
        right: 35rem;
        z-index: 100;
      }

      .ct-content {
        position: absolute;
        height: 40%;
        width: 82%;
        padding: 0 5%;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 15rem;
        left: 4%;

        bottom: 23rem;
        z-index: 10;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;

        .ct-shopname {
          margin-top: 10rem;
          font-size: 42rem;
          font-weight: 600;
          color: #333333;
        }
        .ct-shopinfo {
          color: @userTipFont-color;
        }
      }
    }
  }
</style>
