<template>
  <div style="background-color: #eeeeee">
    <div class="shop-comment-rating">
      <div class="rating-left">
        <span class="left-box">
          4.6
        </span>
        <div class="left-box">
          <span>商家评分</span>
          <van-rate
            v-model="shop.stars"
            :size="3"
            color="#FE6402"
            void-icon="star"
            :count="5"
          />
        </div>
      </div>
      <div class="rating-right">
        <div class="right-box">
          <span>味道</span>
          <span>4.6</span>
        </div>
        <div class="right-box">
          <span>包装</span>
          <span>4.7</span>
        </div>
        <div class="right-box">
          <span>配送</span>
          <span>4.8</span>
        </div>
      </div>
    </div>

    <div class="shop-comment-tag">
      <Tag :type="'shopcomment-good'" :text="'味道不错'" v-for="item in 6" :key="item + 10"/>
      <Tag :type="'shopcomment-bad'" :text="'不好'" v-for="item in 4" :key="item + 20"/>
      <Tag :type="'shopcomment-choose'" :text="'已经选择'" v-for="item in 2" :key="item + 30"/>
      <div class="shop-comment-tag-footer">
        <van-checkbox v-model="tShow">只看有内容的评价</van-checkbox>
      </div>
    </div>
    <div class="shop-comment-item-wrapper">

      <div class="shop-comment-item">
        <div class="shop-comment-right">
          <img :src="'https://pic1.zhimg.com/80/v2-09976e6bbc36c03ff19805e242bcaf58_720w.jpg'" alt="">
        </div>
        <div class="shop-comment-left">
          <div class="left-row-lr">
            <span> 用户名 </span>
            <span> 2020-6-17 </span>
          </div>
          <div class="left-row">
            <van-rate
              v-model="shop.stars"
              :size="3"
              color="#FE6402"
              void-icon="star"
              :count="5"
            />
            <span>超赞</span>
          </div>
          <div class="left-row">
            这是评论评论评论这是评论评论评论这是评论评论评论这是评论评论评论
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Tag from '../../../components/Tag/Tag'
export default {
  props: {
    tconceal: Boolean,
    shop: Object
  },
  data () {
    return {
      tShow: true
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  /deep/.van-rate__icon {
    width: 28rem !important;
    margin-right: 12rem;
  }

  /deep/.van-checkbox__icon {
    height: 100%;
    font-size: 42rem;
    line-height: 100%;
  }

  /deep/.van-checkbox__label {
    margin-left: 15rem;
  }

  .shop-comment-rating {
    display: flex;
    padding: 56rem 56rem;
    border-top: 1rem #eeeeee solid;
    margin-bottom: 35rem;
    background-color: white;
    .rating-left {
      float: left;
      display: flex;
      .left-box {
        margin-right: 48rem;
        height: 128rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        &:first-child {
          font-size: 81rem;
          font-weight: bold;
          color: #fe401e;
        }

        &:last-child {
          text-align: center;
          display: flex;
          flex-direction: column;
          font-size: 38rem;
          color: #969799;
        }
      }
    }
    .rating-right {
      flex: 1;
      display: flex;
      .right-box {
        height: 100%;
        flex: 1;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span {
          font-size: 38rem;
          color: #969799;
          &:last-child {
            font-size: 56rem;
          }
        }
        &:last-child {
          border-left: 1rem #eeeeee solid;
        }
      }
    }
  }

  .shop-comment-tag {
    overflow: hidden;
    padding: 32rem 32rem 160rem 32rem;
    background-color: white;
    margin-bottom: 35rem;
    position: relative;

    .shop-comment-tag-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 2rem #e8e8e8 dashed;
      width: 100%;
      height: 128rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 36rem;
    }
  }

  .shop-comment-item-wrapper {
    .shop-comment-item {
      padding: 32rem;
      background-color: white;
      display: flex;
      border-bottom: 1rem #eeeeee solid;
      .shop-comment-right {
        float: left;
        img {
          height: 192rem;
          width: 192rem;
          border-radius: 10rem;
        }
      }
      .shop-comment-left {
        margin-left: 30rem;

        .left-row, .left-row-lr {
          overflow: hidden;
          line-height: 48rem;
          margin: 10rem;
          font-size: 36rem;
          width: 100%;
          display: block;
        }

        .left-row-lr {
          span {
            &:first-child {
              float: left;
            }
            &:last-child {
              float: right;
            }
          }
        }
      }
    }
  }

</style>
