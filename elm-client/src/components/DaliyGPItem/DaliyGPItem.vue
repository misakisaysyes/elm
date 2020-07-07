<template>
  <div>
    <div class="gpitem-container">
      <img class="gp-img" :src="item.img"/>
      <div class="gp-info">
        <div class="gp-name">
          {{item.gpname}}
        </div>
        <div class="gp-price">
          <span>{{item.gpprice}}</span>
          <span>{{item.gppricedelete}}</span>
        </div>
        <div class="gp-shopname">
          <span>{{item.gpshopname}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .gpitem-container {
    margin:10rem;
    height:395rem;
    width: 30%;
    border: 1rem #dddddd solid;
    border-radius: 35rem;
    float: left;
    img {
      height: 230rem;
      width:100%;
      border-radius: 35rem 35rem 0 0;
    }
    .gp-info {
      padding: 0 20rem;
      .gp-name {
        line-height: 50rem;
        font-size: 40rem;
        font-weight: 600;
      }
      .gp-price {
        line-height: 50rem;
        span {
          &:first-child {
            font-size: 36rem;
            color: #fe401e;
            font-weight: 600;
          }
          &:nth-child(2){
            color: #a8a8a8;
            text-decoration: line-through;
          }
        }
      }
      .gp-shopname {
        color: #a8a8a8;
        font-size: 36rem;
      }
    }
  }
</style>
