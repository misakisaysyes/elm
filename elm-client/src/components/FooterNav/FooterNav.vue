<template>
  <div>
    <ul class="footer-nav" @click="eventAgent()">
      <li>
        <i id="food-icon" class="iconfont icon-waimai" :class="{on : nav.food}"></i>
        <span id="food-text" :class="{on : nav.food}">外卖</span>
      </li>
      <li>
        <i id="daliy-icon" class="iconfont icon-icon" :class="{on : nav.daliy}"></i>
        <span id="daliy-text" :class="{on : nav.daliy}">生活</span>
      </li>
      <li>
        <i id="order-icon" class="iconfont icon-dingdan" :class="{on : nav.order}"></i>
        <span id="order-text" :class="{on : nav.order}">订单</span>
      </li>
      <li>
        <i id="profile-icon" class="iconfont icon-wode" :class="{on : nav.profile}"></i>
        <span id="profile-text" :class="{on : nav.profile}">我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      nav: {
        food: true,
        daliy: false,
        order: false,
        profile: false
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch: {
    $route (to) {
      Object.keys(this.nav).forEach(key => {
        this.nav[key] = false
      })
      let routerStr = to.path.substring(1, to.path.length)
      routerStr === '' && (routerStr = 'food')
      this.nav[routerStr] = true
    }
  },
  methods: {
    goto (url) {
      if (this.$router.currentRoute.fullPath !== ('/' + url)) {
        let gotoUrl = ((url === 'order' || url === 'profile') && !this.userInfo.hasOwnProperty('avatar')) ? '/login' : '/' + url
        if (gotoUrl !== this.$router.currentRoute.fullPath) {
          this.$router.push(gotoUrl)
        }
      }
    },
    eventAgent () {
      if (this.userInfo.avatar) {
        if (event.target.id.includes('food')) {
          this.goto('')
        }
        if (event.target.id.includes('daliy')) {
          this.goto('daliy')
        }
        if (event.target.id.includes('order')) {
          this.goto('order')
        }
        if (event.target.id.includes('profile')) {
          this.goto('profile')
        }
      } else {
        this.goto('login')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  // 要使用变量的话这里导入的.less文件
  @import "../../assets/css/util.less";

  .on {
    background: linear-gradient(to right, #00a7ff, #0188fe);
    -webkit-background-clip: text;
    color: transparent;
  }

  .footer-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;

    background-color: @footerNav-color;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    li {
      margin: 21rem;
      color: @footerNavFont-color;

      i {
        font-size: @iconfont-size;
        font-weight: 600;
      }

      span {
        font-size: @footerNavFont-size;
        display: block;
        text-align: center;
        margin-top: 23rem;
      }
    }
  }
</style>
