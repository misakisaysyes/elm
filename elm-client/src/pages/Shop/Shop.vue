<template>
  <!--由于Js事件模型事件会被执行两次（捕获和冒泡阶段），加once修饰符之后，事件只会被执行一次-->
  <div @click.stop="handleEvent">
    <!--header部分-->
    <div class="shop__header-wrapper" id="shopHeader">
      <div class="shop__header-bg" id="headerBg">
        <!--opacity从0到1-->
      </div>
      <div class="shop__header-icon" id="headerIcon">
        <!--color从white到black-->
        <div class="icon-left"><i class="iconfont icon-zuojiantou1"></i></div>
        <div class="icon-right">
          <span>
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-fenxiang2"></i>
          </span>
          <i class="iconfont icon-pintuan1"></i>
        </div>
      </div>
      <div class="shop__header-search" id="headerSearch">
        <!--opacity从0到1-->
        <div class="search-btn">
          <i class="iconfont icon-sousuo"></i>
          <span>想吃什么搜一搜</span>
        </div>
      </div>
    </div>

    <div class="shop__content-wrapper">
      <div class="shop__header-img-bg" :style="`background-image:url(${shopInfo[shopId].src})`">
        <img :class="'shop__img'" id="shopImg" :src="shopInfo[shopId].src" alt="">
      </div>
      <div class="shop__info-banner">
        <div class="shop__name">
          {{shopInfo[shopId].name}}
        </div>
        <div class="shop__info">
          <span>评分{{shopInfo[shopId].rate}}</span>
          <span>月售{{shopInfo[shopId].sellCount}}</span>
          <span>蜂鸟快送约{{shopInfo[shopId].time}}分钟</span>
        </div>

        <div class="shop__tags">
          <div class="tags-container">
          <Tag :text="item.v" :type="'shopvip'" v-for="item in shopInfo[shopId].vipTag" :key="item.v"/>
          </div>
        </div>
      </div>
      <div class="shop__dropdown-viewport" id="viewport">
        <div class="shop__dropdown-banner">
          <div class="first-row">
              <div><Tag  v-for="item in 4" :key="item" :type="shopInfo[shopId].tags[item].k" :text="shopInfo[shopId].tags[item].v"
                    style="float:left;"/></div>
              <van-icon name="arrow-down"/>
          </div>
          <div class="second-row ellipsis">
            this is dropdown line this is dropdown line this is dropdown line
          </div>
        </div>
        <div class="shop__dropdown-content">
          <div class="title-row">
            <span>优惠</span>
            <div style="float: right">
              <van-icon name="arrow-up"/>
            </div>
          </div>
          <div class="content-row">
            <div v-for="(item, idx) in shopInfo[shopId].tags" :key="idx" style="line-height: 80rem; clear: both;">
              <Tag  :type="item.k" :text="item.v" style="float: left"/>
              <span>{{item.des}}</span>
            </div>
          </div>
          <div class="title-row">
            服务
          </div>
          <div class="content-row">
            <Tag  :type="'shopfoodtag'" :text="'食无忧'" style="float: left"/>
            <span>该商户已购买食品安全责任险，食品安全保障</span>
          </div>
          <div class="title-row">
            公告
          </div>
          <div class="content-row">
            <p>
              一碗素粉，代表着一个贵阳人一天生活的开始，也可能代表着一天的结束。
              田孃素粉，贵阳味道最地道的素粉。
            </p>
          </div>
        </div>
        <div class="shop__dropdown-close">
          <van-icon name="arrow-up" size="50" color="#9a9a9a"></van-icon>
        </div>
      </div>
    </div>

    <div class="shop__content-nav">
      <van-tabs v-model="tActiveTag" >
        <van-tab title="点餐"></van-tab>
        <van-tab title="评价"></van-tab>
        <van-tab title="商家"></van-tab>
      </van-tabs>
    </div>

    <div id="shopContent">
      <ShopOrder v-show="tActiveTag === 0" :tconceal="tConcealFooter" :shop="shopInfo[shopId]"/>
      <ShopComment v-show="tActiveTag === 1" :tconceal="true" :shop="shopInfo[shopId]"/>
      <ShopSelf v-show="tActiveTag === 2" :tconceal="true" :shop="shopInfo[shopId]"/>
    </div>

    <AddPopUp :show-item="shopInfo[shopId].foods[tool.foodId]" ref="popup"/>
  </div>
</template>

<script>
// 路由跳转不会不会加载钩子函数
import {mapState, mapActions} from 'vuex'
import Tag from '../../components/Tag/Tag'
import Utils from '../../../static/js/utils'
import ShopSelf from './subPage/ShopSelf'
import ShopOrder from './subPage/ShopOrder'
import ShopComment from './subPage/ShopComment'
import AddPopUp from './subPage/Tools/AddGoods/AddPopUp'
import ShopGoodsList from './subPage/Tools/ShopGoodsList'
export default {
  props: {
    shopId: String
  },
  data () {
    return {
      tActiveTag: 0,
      tConcealFooter: false,
      tShowPopUp: false
    }
  },
  computed: {
    ...mapState(['tool', 'shopInfo']),
    ...mapActions(['getShopInfo'])
  },
  components: {
    Tag,
    ShopSelf,
    ShopComment,
    ShopOrder,
    AddPopUp,
    ShopGoodsList
  },
  methods: {
    handleEvent () {
      if (event.target.className.includes('van-icon-arrow-down')) {
        Utils.dropDownAnimation(document.getElementById('viewport'), 'down')
        this.tConcealFooter = true
      }
      if (event.target.className.includes('van-icon-arrow-up')) {
        Utils.dropDownAnimation(document.getElementById('viewport'), 'up')
        this.tConcealFooter = false
      }
      if (event.target.className.includes('zuojiantou')) {
        this.$router.go(-1)
      }
    }
  },
  mounted () {
    Utils.setScaleF()
    let viewPort = document.getElementById('viewport')
    let shopContent = document.getElementById('shopContent')
    let headerTop = document.getElementById('shopHeader')
    Utils.touchDropDownAnimation(shopContent, viewPort, this)
    Utils.mutationViewPort(viewPort)
    Utils.headerAnimation(headerTop, shopContent)
    document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .shop__header-wrapper {
    clear: both;
    width: 100%;
    height: 152rem;
    position: fixed;
    z-index: 9991;

    .shop__header-bg, .shop__header-icon, .shop__header-search {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .shop__header-bg {
      z-index: 9992;
      background-color: white;
      opacity: 0;
    }

    .shop__header-icon {
      overflow: hidden;
      z-index: 9993;
      color: rgb(255, 255, 255);

      .iconfont {
        font-size: 70rem;
        font-weight: 600;
        padding: 10rem;
      }

      .icon-left, .icon-right {
        margin-top: 45rem;
        padding: 0 15rem;
      }

      .icon-left {
        float: left;
      }
      .icon-right {
        float: right;
      }
    }

    .shop__header-search {
      z-index: 9994;
      width: 80%;
      left: 10%;
      opacity: 0;
      .search-btn {
        border: none;
        height:100rem;
        line-height: 100rem;
        text-align: center;
        width: 80%;
        margin: 25rem 10%;
        color:#9a9a9a;
        background-color: #eeeeee;
        border-radius: 50rem;
      }
    }
  }

  .shop__content-wrapper {
    clear: both;
    .shop__header-img-bg {
      height: 300rem;
      background-size: 100% 100%;
      position: relative;
      z-index: 999;
      .shop__img {
        width: 200rem;
        height: 200rem;
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .shop__info-banner {
      .shop__name, .shop__info, .shop__tags {
        display: flex;
        justify-content: center;
        margin-top: 35rem;
      }
      .shop__name {
        color: #333333;
        font-size: 50rem;
        font-weight: bold;
        margin-top: 80rem;
      }
      .shop__info {
        font-size: 24rem;
        color: rgb(134, 134, 134);
        span {
          padding: 0 10rem;
        }
      }
      .shop__tags{
        .tags-container {
          display: flex;
        }
      }
    }
    .shop__dropdown-viewport {
      margin-top:25rem;
      position: relative;
      z-index: 1001;
      height: 200rem;
      overflow:hidden;
      .shop__dropdown-banner, .shop__dropdown-content {
        position: absolute;
        top: 0;
        padding: 5rem;
      }
      .shop__dropdown-banner {
        left: 12%;
        width: 76%;
        z-index: 998;
        opacity: 1;
        color: rgb(190, 190, 190);
        .first-row, .second-row {
          height: 85rem;
          line-height: 85rem;
        }
        .first-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .second-row {
          font-size: 30rem;
          width: 95%;
        }
      }
      .shop__dropdown-content {
        left: 4%;
        width: 92%;
        z-index: 990;
        opacity: 0;
        color: #333333;
        background-color: white;
        .title-row {
          height: 90rem;
          line-height: 90rem;
          font-size: 46rem;
          font-weight: bold;
        }
        .content-row {
          font-size: 18rem;
          overflow: hidden;
          line-height: 60rem;
          span {
            float: left;
            margin-left: 20rem;
          }
        }
      }
      .shop__dropdown-close {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 160rem;
        line-height: 160rem;
        text-align: center;
        opacity: 0;
        background-image: linear-gradient(to top, #eeeeee, white);
      }
    }
  }
  .shop__content-nav {
    position: sticky;
    top: 150rem;
    background-color: white;
    z-index: 999;
    /deep/ .van-tab {
      font-size: 45rem;
      color: @fontc-dark;
    }

    /deep/ .van-tab--active {
      color: #1d97ff;
    }

    /deep/ .van-cell {
      font-size: 45rem;
      height: 132rem;
      line-height: 132rem;
      border-bottom: 0.75rem #dddddd solid;
    }

    /deep/ [class*=van-hairline]::after {
      border: none;
    }

    /deep/ .van-tabs__wrap, .van-hairline--top-bottom {
      margin: 0 auto;
      height: 132rem;
    }

    /deep/ .van-tabs__line {
      width: 100rem !important;
      height: 5rem;
      border-radius: 5rem;
      background-color: #1d97ff;
    }
  }
  #shopContent {

  }
</style>
