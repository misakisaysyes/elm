<template>
  <div class="login__container w">
    <van-icon name="arrow-left" @click="goBack()"></van-icon>
    <div class="login__header">登录饿了么</div>
    <van-tabs v-model="tLoginType">
      <van-tab title="手机登录">
        <van-form class="login__phone-container" @submit="onSubmit">
          <!-- 数据 -->
          <van-field
            v-model="uPhoneNum"
            name="phonenum"
            placeholder="手机号"
            type="tel"
            @blur="fieldCheck('phonenum')"
          />
          <div class="login__row">
            <van-field
              v-model="uMsgCaptcha"
              name="msgcaptcha"
              placeholder="短信验证码"
              @blur="fieldCheck('msgcaptcha')"
            />
            <van-button round type="default" :disabled="tDisableCaptcha" @click.prevent="getMsgCaptcha">{{tCountDown ?
              `已发送(${tCountDown}s)` : '获取验证码' }}
            </van-button>
          </div>
          <van-button round block type="info" native-type="submit">提交</van-button>
        </van-form>
      </van-tab>

      <van-tab title="密码登录">
        <van-form class="login__pwd-container" @submit="onSubmit">
          <van-field
            v-model="uAccountName"
            name="accountname"
            placeholder="账户名"
            @blur="fieldCheck('accountname')"
          />

          <div class="login__row">
            <van-field
              v-model="uPWD"
              :type="!tShowPWD ? 'password' : 'text'"
              name="pwd"
              placeholder="密码"
              @blur="fieldCheck('pwd')"
            />
            <span class="iconfont icon-danse_zhengyan" v-show="tShowPWD" @click="tShowPWD = !tShowPWD"></span>
            <span class="iconfont icon-biyan--" v-show="!tShowPWD" @click="tShowPWD = !tShowPWD"></span>
          </div>

          <div class="login__row">
            <van-field
              v-model="uImgCaptcha"
              name="pwd"
              placeholder="验证码"
              @blur="fieldCheck('imgcaptcha')"
            />
            <img ref="captcha" @click="changeImgCaptcha" src="http://localhost:3000/captcha?stamp=0" alt="验证码图片">
          </div>
          <van-button round block type="info" native-type="submit">提交</van-button>
        </van-form>
      </van-tab>
    </van-tabs>

    <div class="login__notice">
      <van-checkbox v-model="tChecked">
        已阅读并同意 <a href="javascript:;">《用户服务协议》</a>和<a href="javascript:;">《隐私政策》</a>
      </van-checkbox>
    </div>

    <div class="login__otherway">
      <van-divider>其他登录方式</van-divider>
      <ul>
        <li><i class="iconfont icon-zhifubao"></i></li>
        <li><i class="iconfont icon-taobao"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weibo"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {Toast, Notify} from 'vant'
import {reqPwdLogin, reqSmsLogin, reqSmsCaptcha} from '../../api'
import {mapActions} from 'Vuex'

export default {
  data () {
    return {
      tLoginType: 0,
      tChecked: false,
      tCountDown: 0,
      tInterValid: 0,
      tRegx: [/^1\d{10}$/, /^[a-z0-9]{6}$/, /^[a-z0-9]{4}$/],
      tShowPWD: false,

      uPhoneNum: '',
      uMsgCaptcha: '',
      uAccountName: '',
      uPWD: '',
      uImgCaptcha: ''
    }
  },
  computed: {
    tDisableCaptcha () {
      return !this.tRegx[0].test(this.uPhoneNum)
    }
  },
  methods: {
    ...mapActions(['setUserInfo']),
    async onSubmit () {
      console.log('执行submit')
      let res
      if (!this.tLoginType) {
        // 手机验证码登录方式
        let erc = this.tRegx[1].test(this.uMsgCaptcha)
        let erp = this.tRegx[0].test(this.uPhoneNum)
        if (!erc || !erp) {
          Toast.fail('请重新输入' + (erp ? '' : '手机号') + ((!erp && !erc) ? '和' : '') + (erc ? '' : '验证码'))
        } else if (!this.tChecked) {
          Toast.fail('请阅读《用户协议》和《隐私政策》')
        } else {
          res = await reqSmsLogin(this.uPhoneNum, this.uMsgCaptcha)
        }
      } else {
        // 账户密码登录方式
        res = await reqPwdLogin(this.uAccountName, this.uPWD, this.uImgCaptcha)
      }
      // 停止计时
      if (this.tCountDown) {
        this.tCountDown = 0
        clearInterval(this.tInterValid)
        this.tInterValid = undefined
      }

      res = res.data
      if (res.code === 0) { // 登录成功
        // 登录成功后将用户信息保存到vuex中
        this.setUserInfo(res.data)
        // 通过路由跳转到用户个人中心页面
        this.$router.replace('/profile')
      } else { // 登录失败
        Toast(res.msg)
        this.tLoginType && this.changeImgCaptcha()
      }
    },
    async getMsgCaptcha () {
      // 如果当前没有倒计时，启动倒计时
      if (!this.tCountDown) {
        this.tCountDown = 60
        // 调用异步注意使用箭头函数改变this
        this.tInterValid = setInterval(() => {
          this.tCountDown--
          if (this.tCountDown <= 0) {
            clearInterval(this.tInterValid)
          }
        }, 1000)
        // 这里发送请求短信验证码
        let res = reqSmsCaptcha(this.uPhoneNum)
        // 发送验证码失败
        if (res.code === 1) {
          Toast(res.msg)
          // 停止计时
          if (this.tCountDown) {
            this.tCountDown = 0
            clearInterval(this.tInterValid)
            this.tInterValid = undefined
          }
        }
      }
    },
    fieldCheck (type) {
      switch (type) {
        case 'phonenum':
          if (!this.tRegx[0].test(this.uPhoneNum)) {
            Notify({type: 'warning', message: '手机号格式错误，请重新输入', duration: 666})
          }
          break
        case 'msgcaptcha':
          if (!this.tRegx[1].test(this.uMsgCaptcha)) {
            Notify({type: 'warning', message: '验证码至少6位，请重新输入', duration: 666})
          }
          break
        case 'accountname':
          if (this.uAccountName === '') {
            Notify({type: 'warning', message: '账户名不能为空，请重新输入', duration: 666})
          }
          break
        case 'pwd':
          if (this.uPWD === '') {
            Notify({type: 'warning', message: '密码不能为空，请重新输入', duration: 666})
          }
          break
        case 'imgcaptcha':
          if (!this.tRegx[1].test(this.uImgCaptcha)) {
            Notify({type: 'warning', message: '验证码至少6位，请重新输入', duration: 666})
          }
          break
      }
    },
    changeImgCaptcha () {
      this.$refs.captcha.src = this.$refs.captcha.src.substring(0, this.$refs.captcha.src.lastIndexOf('=') + 1) + Date.now()
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  .login__container {
    color: #b2b2b2;
    font-size: 30rem;

    .van-icon {
      height: 150rem;
      line-height: 150rem;
      font-size: 50rem;
      font-weight: 600;
    }

    /* 头部 */
    .login__header {
      margin: 100rem 0 50rem 0;
      text-align: center;
      height: 150rem;
      line-height: 150rem;
      font-size: 96rem;
      font-weight: 700;
      color: @deepbule;
    }

    /* 登录方式导航 修改vant样式 */
    /deep/ .van-tab {
      font-size: 40rem;
      color: #b2b2b2;
    }

    /deep/ .van-tab--active {
      color: #0090ff;
    }

    /deep/ .van-cell {
      font-size: 40rem;
      height: 128rem;
      line-height: 128rem;
      border-bottom: 0.75rem #dddddd solid;
    }

    /deep/ [class*=van-hairline]::after {
      border: none;
    }

    /deep/ .van-tabs__wrap, .van-hairline--top-bottom {
      margin: 0 auto;
      width: 70%;
      height: 128rem;
    }

    /deep/ .van-tabs__line {
      width: 80rem;
      height: 3rem;
      background-color: @deepbule;
    }

    .login__phone-container, .login__pwd-container {
      color: @tipfontc;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 50rem 0 20rem 0;

      .login__row {
        display: flex;
        flex-direction: row;
        height: 128rem;
        line-height: 128rem;

        img {
          margin-top: 25rem;
          height: 100rem;
          width: 200rem;
        }

        .van-button--default {
          width: 320rem;
          height: 90rem;
          font-size: 36rem;
          color: @tipfontc;
          border: 2rem #b2b2b2 solid;
          border-radius: 45rem;
          margin-top: 30rem;
        }

        .van-button--info {
          background-color: @deepbule;
        }
      }
    }

    .van-button {
      height: 100rem;
      font-size: 40rem;
      border-radius: 50rem;
      margin: 45rem 0 22rem 0;
    }

    .login__phone-container {

    }

    .login__pwd-container {

    }

    .van-tab {
      color: @tipfontc;
    }

    .van-tab--active {
      color: @tipfontc--active;
    }

    .iconfont {
      font-size: 60rem;
    }

    /* notice部分 */
    /deep/ .login__notice {
      font-size: 38rem;

      .van-checkbox__icon {
        font-size: 50rem !important;
        margin-right: 15rem;

        .van-icon {
          border: 2rem solid #c8c9cc;
        }
      }

      .van-checkbox__label, .van-checkbox__icon--checked {
        color: @tipfontc;
        a {
          color: @deepbule;
        }
      }
    }

    .login__otherway {
      width: 90%;
      height: 100rem;
      position: absolute;
      bottom: 100rem;
      .van-divider {
        font-size: 40rem;
        &::after, &::before {
          border-width: 3rem;
        }
      }
      ul {
        margin-top: 60rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        li {
          .iconfont {
            font-size: 60rem;
            color: #b2b2b2;
          }
        }
      }
    }
  }
</style>
