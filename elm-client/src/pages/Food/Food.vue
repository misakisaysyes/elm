<template>
  <div>
    <HeaderTop>
      <div slot="left" class="food__headertop-site">
        <i class="iconfont icon-dingwei"></i>
        {{sLocation}}
      </div>
      <ul slot="right" class="food__headertop-tool">
        <li><van-icon class-prefix="iconfont" name="scan"/></li>
        <li><van-icon name="chat-o" dot/></li>
      </ul>
    </HeaderTop>

    <div style=" width:95%; position:relative; z-index:-1; margin: 0 auto;">
      <van-swipe class="food__swiper-bar" :autoplay="3500" @change="onSwiperFoodChange">
        <van-swipe-item v-for="(item, index) in sSwiperFoodContent" :key="index"
                        :style="{ backgroundImage: 'url(' + item.src + ')', backgroundSize: '100% 100%', height: '300rem'}"></van-swipe-item>
        <template #indicator>
          <ul class="food__swiper-indicator">
            <li v-for="(item, idx) in sSwiperFoodContent" :key="idx"
                :class="{'food__swiper-indicator--active': idx == tSwipefoodCur }"></li>
          </ul>
        </template>
      </van-swipe>

      <nav class="food__nav">
        <div class="food__nav-row" v-for="(itemrow, idx) in tFoodNav" :key="idx">
          <img v-for="(item, idx) in itemrow" :key="idx" :src=item.src alt="">
        </div>
      </nav>

      <VipBar>
        <span slot="notecontent">.已为您节省7元</span>
        <span slot="tipcontent">下单即可获得奖励金</span>
      </VipBar>

      <section class="food__bonus">
        <div class="food__bonus-title">优惠专区</div>
        <div class="food__bonus-content">
          <Bonus v-for="(item, idx) in tFoodBonus" :key="idx" :bg_imgurl="item.pUrl"
                 :title_bgcolor="item.pBgColor" :plugin="item.pPlugin">
            <span slot="title">{{item.title}}</span>
            <span slot="content">{{item.content}}</span>
          </Bonus>
        </div>
      </section>

      <section class="food__custom">
        <div class="food__custom-title">
          <span>专属.午后时光</span>
          <van-icon name="arrow"  style="float:right;margin-top:50rem"/>
        </div>
        <div class="food__custom-content">
          <CustomNormal v-for="(item, idx) in tCustomNormal"
            :key="idx"
            :bg_imgurl="item.bg"
            :show_imgurl="item.show"
            :shop_name="item.name"
            :shop_des="item.des"
          />
          <!--同一个模板中不能有两个相同的key值-->
          <CustomTop v-for="(item, idx) in tCustomTop"
            :key= "`info-${idx}`"
            :bg_imgurl="item.bg"
            :show_imgurl="item.show"
            :shop_name="item.name"
            :shop_des="item.des"
          />
        </div>
      </section>

      <van-swipe class="food__swiper-bar" :autoplay="3500" @change="onSwiperShopChange">
        <van-swipe-item v-for="(item, idx) in sSwiperShopContent" :key="idx"
                        :style="{ backgroundImage: 'url(' + item.src + ')', backgroundSize: '100% 100%'}"></van-swipe-item>
        <template #indicator>
          <ul class="food__swiper-indicator">
            <li v-for="(item, idx) in sSwiperShopContent" :key="idx"
                :class="{'food__swiper-indicator--active': idx === tSwipeShopCur }"></li>
          </ul>
        </template>
      </van-swipe>
    </div>

    <!--这里用的是v-show的方式-->
    <HeaderNavTop @func="getNavTopCur"/>
    <div class="subpage-item" v-show="tShowSubPage.shops">
      <HeaderNavMain/>
      <Shops/>
    </div>
    <div class="subpage-item" v-show="tShowSubPage.selfget">
      <SelfGet/>
    </div>
    <div class="subpage-item" v-show="tShowSubPage.market">
      <Market/>
    </div>
    <div class="subpage-item" v-show="tShowSubPage.dish">
      <Dish/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import HeaderNavTop from '../../components/HeaderNav/HeaderNavTop'
import HeaderNavMain from '../../components/HeaderNav/HeaderNavMain'
import VipBar from '../../components/VipBar/VipBar'
import Bonus from '../../components/Bonus/Bonus'
import CustomNormal from '../../components/Custom/CustomNormal/CustomNormal'
import CustomTop from '../../components/Custom/CustomTop/CustomTop'
import Shops from './SubPages/Shops'
import SelfGet from './SubPages/SelfGet'
import Market from './SubPages/Market'
import Dish from './SubPages/Dish'
export default {
  data () {
    return {
      tSwipefoodCur: 0,
      tSwipeShopCur: 0,
      tFoodNav: [
        [
          {title: '1', src: '../../../static/img/FoodNav/food__nav1.png'},
          {title: '2', src: '../../../static/img/FoodNav/food__nav2.png'},
          {title: '3', src: '../../../static/img/FoodNav/food__nav3.png'},
          {title: '4', src: '../../../static/img/FoodNav/food__nav4.png'},
          {title: '5', src: '../../../static/img/FoodNav/food__nav5.png'}
        ],
        [
          {title: '6', src: '../../../static/img/FoodNav/food__nav6.png'},
          {title: '7', src: '../../../static/img/FoodNav/food__nav7.png'},
          {title: '8', src: '../../../static/img/FoodNav/food__nav8.png'},
          {title: '9', src: '../../../static/img/FoodNav/food__nav9.png'},
          {title: '10', src: '../../../static/img/FoodNav/food__nav10.png'}
        ],
        [
          {title: '11', src: '../../../static/img/FoodNav/food__nav11.png'},
          {title: '12', src: '../../../static/img/FoodNav/food__nav12.png'},
          {title: '13', src: '../../../static/img/FoodNav/food__nav13.png'},
          {title: '14', src: '../../../static/img/FoodNav/food__nav14.png'},
          {title: '15', src: '../../../static/img/FoodNav/food__nav15.png'}
        ]
      ],
      tFoodBonus: [
        {
          pUrl: '../../static/img/FoodBonus/food__bonus1.png',
          pBgColor: 'red',
          pPlugin: 'timecounter',
          title: '限时秒杀',
          content: '晚餐9.9元起'
        },
        {
          pUrl: '../../static/img/FoodBonus/food__bonus2.png',
          pBgColor: 'blue',
          pPlugin: '红包与满减叠加',
          title: '会员专享',
          content: '超级会员日'
        }
      ],
      tCustomNormal: [
        {
          bg: '../../../../static/img/FoodBonus/food__bonus1.png',
          show: '../../../../static/img/FoodBonus/food__bonus1.png',
          name: '聚香园',
          des: '附近新晋热店'
        },
        {
          bg: '../../../../static/img/FoodBonus/food__bonus2.png',
          show: '../../../../static/img/FoodBonus/food__bonus2.png',
          name: '碗碗香小碗菜',
          des: '川香菜高回头客店'
        }
      ],
      tCustomTop: [
        {
          bg: '../../../../static/img/FoodBonus/food__bonus3.png',
          show: '../../../../static/img/FoodBonus/food__bonus3.png',
          name: '聚香园',
          des: '附近新晋热店'
        },
        {
          bg: '../../../../static/img/FoodBonus/food__bonus4.png',
          show: '../../../../static/img/FoodBonus/food__bonus4.png',
          name: '碗碗香小碗菜',
          des: '川香菜高回头客店'
        }
      ],
      tShowSubPage: {
        shops: true,
        selfget: false,
        market: false,
        dish: false
      },
      sLocation: '贵州省贵阳市云岩区',
      sSwiperFoodContent: [
        {title: '1', src: '../../../static/img/FoodSwiperImg/food__swiper1.png'},
        {title: '2', src: '../../../static/img/FoodSwiperImg/food__swiper2.png'},
        {title: '3', src: '../../../static/img/FoodSwiperImg/food__swiper3.png'},
        {title: '4', src: '../../../static/img/FoodSwiperImg/food__swiper4.png'}
      ],
      sSwiperShopContent: [
        {title: '1', src: '../../../static/img/FoodNav2/food__nav2_1.png'},
        {title: '2', src: '../../../static/img/FoodNav2/food__nav2_2.png'},
        {title: '3', src: '../../../static/img/FoodNav2/food__nav2_3.png'}
      ]
    }
  },
  created () {
    // 异步取数据，保证异步方法getShopInfo在setShopOrder后
    (async () => {
      await this.getShopInfo()
      this.setShopOrder('init')
    })()
  },
  components: {
    HeaderTop,
    HeaderNavTop,
    HeaderNavMain,
    VipBar,
    Bonus,
    CustomNormal,
    CustomTop,
    Shops,
    SelfGet,
    Market,
    Dish
  },
  methods: {
    ...mapActions(['getShopInfo', 'setShopOrder']),
    onSwiperFoodChange (idx) {
      this.tSwipefoodCur = idx
    },
    onSwiperShopChange (idx) {
      this.tSwipeShopCur = idx
    },
    navTo (idx) {
      alert('您好，您点击了' + idx)
    },
    getNavTopCur (data) {
      this.tShowSubPage = {
        shops: false,
        selfget: false,
        market: false,
        dish: false
      }
      this.tShowSubPage[data] = true
    },
    test (str) {
      console.log(str)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  /**
  * headrtop样式
  */
  .food__headertop-site {
    font-size: 50rem;
    font-weight: 600;
    color: #333333;

    .iconfont {
      font-size: 55rem;
      color: #0cabff;
    }
  }

  .food__headertop-tool {
    li {
      float: left;
      margin-left: 55rem;

      .iconfont, .van-icon {
        font-size: 55rem;
        font-weight: 600;
        color: #333333;
      }
    }
  }

  /**
  * swiper1样式
  */
  .food__swiper-bar {
    .van-swipe-item {
      margin: 25rem 0;
      height: 300rem;
    }
  }

  .food__swiper-indicator, .food__swiper-indicator {
    position: absolute;
    bottom: 50rem;
    left: 50%;
    transform: translateX(-50%);

    li {
      float: left;
      height: 6rem;
      width: 28rem;
      margin: 0 7rem;
      background-color: rgba(0, 0, 0, 0.3)
    }

    .food__swiper-indicator--active, .food__swiper-indicator--active {
      background-color: rgba(0, 0, 0, 0.9)
    }
  }
  .food__swiper-indicator {
    bottom: 30rem;
  }

  /**
  *图片nav样式
  */
  .food__nav {
    margin: 30rem 0 40rem 0;

    .food__nav-row {
      width: 100%;
      margin-top: 25rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &:nth-child(1) img {
        height: 215rem;
        width: 160rem;
      }

      &:nth-child(2) img,
      &:nth-child(3) img {
        width: 200rem;
        height: 160rem;
      }
    }
  }

  /**
  *bonus样式 和 custom布局样式
  */
  .food__bonus, .food__custom {
    /* 开启一个bfc */
    overflow: auto;
    .food__bonus-title,
    .food__custom-title {
      font-size: 50rem;
      font-weight: 600;
      line-height: 150rem;
    }
  }

  /**
  * 第二条导航样式
  */
  .food__swiper-bar .van-swipe-item {
    margin: 50rem 0;
    height: 650rem;
  }

  .subpage-item {
    .deep-bg {
      background-color: #dddddd;
    }
  }
</style>
