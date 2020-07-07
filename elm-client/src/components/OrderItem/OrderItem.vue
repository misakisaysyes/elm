<template>
  <div>
    <div class="fx-box">
      <img src="static/img/FoodShops/shop1.PNG" alt="" class="fx-box--left">
      <div class="fx-box--right">
        <div class="fx-row--lr">
          <div class="fx-left">
            <div>成都火锅冒菜</div>
            <div>2020-05-26 16:56</div>
          </div>
          <span class="fx-right">已送达</span>
        </div>
        <div class="fx-row">
          <div>懒人单人套餐（含米饭）等两件</div>
          <button>再来一单</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .fx-box {
    width: 86%;
    padding: 40rem;
    margin: 30rem;
    background-color: white;
    border-radius: 20rem;
    .fx-box--left {
      width: 110rem;
      height: 110rem;
      border-radius: 5rem;
    }
    .fx-box--right {
      .fx-row--lr {
        padding-bottom: 20rem;
        height: 150rem;
        border-bottom: 1rem #eee solid;
        font-size: 40rem;
        color: #7f7f7f;

        div:first-child div:first-child {
          color: #333333;
          font-weight: 600;
          margin-bottom: 32rem;
        }
      }
      .fx-row {
        font-size: 40rem;
        height: 65%;

        div:first-child {
          margin: 50rem 5rem;
        }

        button {
          background-color: white;
          border: 1.5rem #06a8f3 solid;
          padding: 30rem;
          font-size: 40rem;
          color: #06a8f3;
          float: right;
          border-radius: 7rem;
        }
      }
    }
  }
</style>
