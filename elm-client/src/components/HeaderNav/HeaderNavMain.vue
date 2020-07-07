<template>
    <div class="nav-main">
      <div class="nav-main--up">
        <van-dropdown-menu>
          <van-dropdown-item v-model="t_orderidx" :options="t_orderArr" />
        </van-dropdown-menu>
        <span :class="{active :t_btn.dist}" @click="activeBtn('dist')">距离</span>
        <span :class="{active :t_btn.sellCount}" @click="activeBtn('sellCount')">销量</span>
      </div>
      <div class="nav-main--down">
        <!--在父组件中给子组件绑定监听事件-->
        <Tag :type="'foodnavtag'" :text="'津贴优惠'" :on="t_btn.allowance" @click.native="activeBtn('allowance')"/>
        <Tag :type="'foodnavtag'" :text="'会员领红包'" :on="t_btn.member" @click.native="activeBtn('member')"/>
        <Tag :type="'foodnavtag'" :text="'满减优惠'" :on="t_btn.discount" @click.native="activeBtn('discount')"/>
        <Tag :type="'foodnavtag'" :text="'品质联盟'" :on="t_btn.quality" @click.native="activeBtn('quality')"/>
      </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import {mapActions} from 'vuex'
import Tag from '../Tag/Tag'
export default {
  data () {
    return {
      t_tagOn: true,
      t_navTagOn: [false, false, false, false],
      t_btn: {
        dist: false,
        sellCount: false,
        allowance: false,
        member: false,
        discount: false,
        quality: false
      },
      t_orderidx: 0,
      t_orderArr: [
        {text: '综合排序', value: 0},
        {text: '好评优先', value: 1},
        {text: '起送价最低', value: 2},
        {text: '配送最快', value: 3},
        {text: '配送费最低', value: 4},
        {text: '人均从低到高', value: 5},
        {text: '人均从高到低', value: 6},
        {text: '通用排序', value: 7}
      ]
    }
  },
  methods: {
    ...mapActions(['setShopOrder', 'setTest']),
    activeBtn (flag) {
      console.log('点击按钮')
      flag === 'dist' && this.t_btn.sellCount && (this.t_btn.sellCount = false)
      flag === 'sellCount' && this.t_btn.dist && (this.t_btn.dist = false)
      this.t_btn[flag] = !this.t_btn[flag]
      this.setShopOrder(flag)
      this.setTest()
      PubSub.publish('changeShopOrder', flag)
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .active {
    color:#06a8f3;
  }
  .nav-main {
    position: sticky;
    top:155rem;
    width: 100%;
    overflow: hidden; //开启一个bfc
    z-index: 99;

    .van-dropdown-menu {

    }

    .nav-main--up, .nav-main--down {
      line-height: 155rem;
    }

    .nav-main--up {
      span {
        font-size: 40rem;
        margin:0 20rem;
        &:nth-child(2) {
          margin-left: 75rem;
        }
      }
      /deep/.van-dropdown-menu__bar {
        float:left;
        box-shadow:none;
        height: 155rem;
      }
      /deep/.van-dropdown-menu__title {
        line-height: 160rem;
        font-size: 40rem;
        padding: 10rem 32rem;
        color:#06a8f3;
      }
      /deep/.van-dropdown-menu__title::after {
        position: absolute;
        top: 50%;
        right: -8rem;
        margin-top: -15rem;
        border: 9rem solid;
        border-color: transparent transparent #06a8f3 #06a8f3;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        opacity: .8;
        content: '';
      }
      /deep/.van-popup .van-cell {
          padding: 0 35rem;
          font-size: 40rem;
          line-height: 150rem;
      }
    }

    .nav-main--down {
      padding:0 2%;
      width: 96%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: white;
    }
  }
</style>
