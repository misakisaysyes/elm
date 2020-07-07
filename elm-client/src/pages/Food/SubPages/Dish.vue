<template>
    <!--模板必须要有根标签-->
    <div class="dish-bg">
      <div class="lazy-w">
        <div class="dish-container" v-for="item in 6" :key="item">
          <img class="dish-img" src="static/img/FoodDish/shop1.png"/>
          <div class="dish-info">
            <div class="dish-name">this is dish name</div>
            <div class="dish-sellcount">
              <span>月售616</span>
              <span>30分钟</span>
              <span>配送￥3</span>
            </div>
            <div class="dish-price">
              <span class="price-bold">￥9.3</span>
              <span class="price-delete">￥13</span>
              <Tag :type="'discount'" :text="'9.0折扣'"/>
            </div>
          </div>
          <div class="dish-shop">
            <img class="dish-shop--left" src="static/img/FoodDish/shop1.png" alt=""/>
            <div class="dish-shop--right">
              <div class="shop-info">
                成都火锅冒菜
              </div>
              <div class="shop-sellcount">
                <span>评分4.4</span>
                <span>起送20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import Tag from '../../../components/Tag/Tag'
export default {
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";
  .dish-bg {
    background-color: #dddddd;
    overflow:hidden;
    width:100%;
    padding-top:30rem;
  }
  .dish-container {
    float: left;
    width: 48%;
    margin: 10rem;
    border-radius: 25rem;
    background-color: white;

    .dish-img {
      width: 100%;
      border-radius: 25rem 25rem 0 0;
    }

    .dish-info {
      margin: 15rem;

      .dish-name, .dish-sellcount, .dish-price {
        line-height: 70rem;
      }

      .dish-name {
        font-size: 50rem;
        font-weight: 600;
      }

      .dish-sellcount, .dish-price {
        color: @tipfontc--deep;
        font-size: 20rem;
      }

      .dish-price {
        display: flex;
        .price-bold {
          color: #FF4B34;
          font-size: 45rem;
          font-weight: 600;
        }

        .price-delete {
          color: @tipfontc--deep;
          font-size: 20rem;
          text-decoration: line-through;
          margin: 0 10rem;
        }
      }
    }

    .dish-shop {
      margin: 15rem;
      padding-top: 20rem;
      height: 100rem;
      border-top: 1rem #dddddd solid;
      .dish-shop--left {
        float: left;
        height: 100rem;
        width: 100rem;
      }
      .dish-shop--right {
        float: left;
        margin-left: 15rem;
        line-height: 50rem;
        .shop-info {
          font-size: 30rem;
          color: #333333;
        }
        .shop-sellcount {
          font-size: 20rem;
          color: @tipfontc--deep;
        }
      }
    }
  }
</style>
