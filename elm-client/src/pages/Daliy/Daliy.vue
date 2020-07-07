<template>
  <div>
    <HeaderTop>
      <div slot="left" class="headertop-left">
        <span class="header-logo">生活</span>
        <span class="header-city">{{sCity}}</span>
        <van-icon name="arrow-down" size="16"></van-icon>
      </div>
      <div slot="right" class="headertop-right">
        <ul>
          <li>
            <i class="iconfont icon-xuanze-duoxuan-tianchong"></i>
            <span>在线团购</span>
          </li>
          <li>
            <i class="iconfont icon-xuanze-duoxuan-tianchong"></i>
            <span>到店享</span>
          </li>
          <li>
            <i class="iconfont icon-xuanze-duoxuan-tianchong"></i>
            <span>过期退</span>
          </li>
        </ul>
      </div>
    </HeaderTop>
    <div class="lazy-w">
      <div class="daliy__slider" ref="daliySlider">
        <div class="daliy__slider-content">
          <div class="slider-item" v-for="(item, idx) in tSliderItem" :key="idx">
            <img :src="item.url" alt="">
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
      <div class="daliy__shortcut-bar">
        <img src="static/img/Daliy/daliy_banner1.PNG" alt="">
        <img src="static/img/Daliy/daliy_banner2.PNG" alt="">
      </div>
      <div class="daliy__group-purchase">
        <div class="gp-header">
          <div class="left">
            <TimeCounter :text="'口碑团购'" :type="'daliy'"/>
          </div>
          <div class="right">
            <span>更多</span>
          </div>
        </div>
        <DaliyGPItem v-for="(item, idx) in tDaliyGPItem" :key="idx" :item="item"/>
      </div>
    </div>
    <div class="daliy__recommend">
      <div class="r-header">
        附近推荐
      </div>
      <DaliyItem v-for="ite in 20" :key="ite" class="lazy-w"/>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import BScroll from 'better-scroll'
import TimeCounter from '../../components/TimeCounter/TimeCounter'
import DaliyGPItem from '../../components/DaliyGPItem/DaliyGPItem'
import DaliyItem from '../../components/DaliyItem/DaliyItem'
export default {
  data () {
    return {
      sCity: '贵阳',
      tSliderItem: [
        { url: '../../../static/Daliy/daliy1.png', text: '美食' },
        { url: '../../../static/Daliy/daliy2.png', text: '超市' },
        { url: '../../../static/Daliy/daliy3.png', text: '电影' },
        { url: '../../../static/Daliy/daliy4.png', text: '休闲娱乐' },
        { url: '../../../static/Daliy/daliy5.png', text: '丽人' },
        { url: '../../../static/Daliy/daliy6.png', text: '酒店' },
        { url: '../../../static/Daliy/daliy7.png', text: '机票火车票' },
        { url: '../../../static/Daliy/daliy8.png', text: '亲子' }
      ],
      tDaliyGPItem: [
        { img: '../../../static/Daliy/daliy_food1.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' },
        { img: '../../../static/Daliy/daliy_food2.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' },
        { img: '../../../static/Daliy/daliy_food3.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' },
        { img: '../../../static/Daliy/daliy_food4.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' },
        { img: '../../../static/Daliy/daliy_food5.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' },
        { img: '../../../static/Daliy/daliy_food6.PNG',
          gpname: '芝士棒',
          gpprice: '7.5',
          gppricedelete: '15',
          gpshopname: '贵州龙' }
      ]
    }
  },
  components: {
    HeaderTop,
    TimeCounter,
    DaliyGPItem,
    DaliyItem
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.daliySlider, {
      scrollX: true,
      momentum: false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .headertop-left {
    background-color: white;
    display: flex;
    align-items: center;

    .header-logo {
      font-size: 70rem;
      font-weight: 600;
      color: #01a6ff;
      display: inline-block;
      margin-right: 35rem;
    }

    .header-city {
      font-size: 50rem;
      font-weight: 600;
      display: inline-block;
      margin-right: 25rem;
    }
  }
  .headertop-right {
    background-color: white;
    color: #a8a8a8;
    font-size: 36rem;

    .iconfont {
      font-size: 36rem;
    }

    li {
      float: left;
      margin-left: 25rem;
    }
  }
  .daliy__slider {
    background-color: white;
    margin: 40rem 0;
    width: 100%; //bscroll样式必写
    height: 210rem; //bscroll样式必写
    position: relative; //bscroll样式必写
    overflow: hidden; //bscroll样式必写
    .daliy__slider-content {
      width: 172%; //bscroll样式必写
      position: absolute; //bscroll样式必写
      .slider-item {
        float: left;
        height: 200rem;
        width: 200rem;
        margin:5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 36rem;
        img {
          margin:0 auto;
          height: 120rem;
          width: 120rem;
        }
      }
    }
  }
  .daliy__shortcut-bar {
    background-color: white;
    overflow: hidden;
    margin: 40rem 0 50rem 0;
    img {
      height: 160rem;
      width: 49%;
      &:nth-child(1) {
        float: left;
      }
      &:nth-child(2) {
        float: right;
      }
    }
  }
  .daliy__group-purchase {
    background-color: white;
    overflow: hidden; // 开启bfc 防止影响后续元素
    .gp-header {
      height: 50rem;
      overflow: hidden;
      margin-bottom: 45rem;
      background-color: white;
      .left {
        float: left;
      }
      .right {
        float: right;
        color: #a8a8a8;
        font-size: 36rem;
        padding-top: 6rem;
      }
    }
  }
  .daliy__recommend {
    background-color: #eee;
    .r-header {
      padding: 0 30rem;
      background-color: white;
      height:100rem;
      line-height: 100rem;
      font-size: 50rem;
      font-weight: 600;
      color: #333333;
    }
  }
</style>
