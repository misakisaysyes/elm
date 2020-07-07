<template>
  <div>
    <div class="up-bg-wrapper">
      <div class="w">
        <div class="profile__header-top lazy-w">
          <i class="iconfont icon-xiaoxi profile__iconfont"></i>
          <i class="iconfont icon-tubiao_shezhi profile__iconfont"></i>
        </div>
        <div class="profile__user-banner lazy-w">
          <div class="profile__user-banner--left">
            <div class="profile__user-account">{{showName}}</div>
            <div class="profile__user-tips">再忙，也要记得吃饭哟~</div>
            <van-button type="default" round><i class="iconfont icon-qiandao profile__iconfont"></i>签到领10元红包
            </van-button>
          </div>
          <div class="profile__user-banner--right">
            <img :src="userInfo.avatar" alt="" class="profile__user-avatar">
          </div>
        </div>
        <VipBar>
          <span slot="tipcontent">开通后，每月领超过<i>20</i>元红包</span>
        </VipBar>
        <ul class="profile__user-assert">
          <li class="profile__user-assert--item">
            <span class="profile__user-assert--title">红包卡券</span>
            <span class="profile__user-assert--info">暂无红包</span>
          </li>
          <li class="profile__user-assert--item">
            <span class="profile__user-assert--title">津贴</span>
            <span class="profile__user-assert--info"><i>20￥</i>可用</span>
          </li>
          <li class="profile__user-assert--item">
            <span class="profile__user-assert--title">钱包</span>
            <span class="profile__user-assert--info">金钱，借钱...</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="profile__user-nav w">
      <van-cell icon-prefix="iconfont" v-for="(value, key) in tUserNavBar" :icon="key" :title="value" size="large"
                :key="key">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;"/>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import {mapState} from 'Vuex'
import VipBar from '../../components/VipBar/VipBar'

export default {
  data () {
    return {
      tUserNavBar: {
        collect: '我的收藏',
        server: '我的客服',
        addr: '我的地址',
        gift: '推荐有奖',
        business: '商务合作',
        card: '办卡有礼',
        company: '企业订餐',
        charity: '3小时公益',
        bonus: '专享红包',
        phoneCost: '话费充值'
      }
    }
  },
  // 注意这里要用计算属性
  computed: {
    ...mapState(['userInfo']),
    showName () {
      if (this.userInfo.phone) {
        return this.userInfo.phone.substring(0, 3) + '****' + this.userInfo.phone.substring(7, 11)
      } else {
        return this.userInfo.name
      }
    }
  },
  components: {
    VipBar
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  .up-bg-wrapper {
    background-image: linear-gradient(#ffffff 60%, #F8FAFA 85%, #ffffff 100%);
    i {
      color: orangered;
      font-size: 45rem;
    }
    .profile__header-top {
      height: 200rem;
      line-height: 200rem;
      i {
        font-size: @iconfont-size;
        font-weight: 600;
        color: @headerIconfont-color;
        float: right;
        margin-left: 55rem;
      }
    }

    .profile__user-banner {
      overflow: hidden;
      margin-bottom: 100rem;
      .profile__user-banner--left {
        float: left;
        height: 350rem;
        .profile__user-account {
          font-size: 72rem;
          margin-bottom: 50rem;
        }
        .profile__user-tips {
          font-size: 36rem;
          color: @userTipFont-color;
          margin-bottom: 50rem;
        }
        .van-button {
          font-size: @footerNavFont-size;
          height: 76rem;
          width: 375rem;
          border: 1.5rem #dddddd solid;
          border-radius: 38rem;
          .iconfont {
            font-size: @footerNavFont-size;
            color: orangered;
            font-weight: bolder;
            margin-right: 15rem;
          }
        }
      }
      .profile__user-banner--right {
        float: right;
        img {
          height: 240rem;
          width: 240rem;
          border-radius: 120rem;
        }
      }
    }
  }

  .profile__user-assert {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 35rem 0;
    .profile__user-assert--item {
      flex-grow: 1;
      padding: 15rem 30rem;
      height: 150rem;
      width: 270rem;
      border: 1rem #f7f7f7 solid;
      background-color: white;
      box-shadow: 1rem 1rem 3rem #f7f7f7, -1rem -1rem 3rem #f7f7f7;
      border-radius: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &:nth-child(2) {
        margin-left: 15rem;
        margin-right: 15rem;
      }
      .profile__user-assert--title {
        color: @fontc-dark;
        font-size: 40rem;
        font-weight: 600;
      }
      .profile__user-assert--info {
        color: @tipfontc--deep;
        font-size: 30rem;
        i {
          color: orangered;
          font-size: 40rem;
          font-weight: 600;
        }
      }
    }
  }

  .profile__user-nav {
    .van-cell {
      .iconfont {
        font-size: 50rem;
        font-weight: 600;
        color: #06a8f3;
      }
    }
    .van-cell__title {
      margin-left: 35rem;
      span {
        font-size: 45rem;
      }
    }
    .van-cell--large {
      padding-top: 65rem;
      padding-bottom: 65rem;
    }
  }
</style>
