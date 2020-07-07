// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// postcss适配方案
import '../static/js/rem'

// vue组件
import Vue from 'vue'
import App from './App'

// 注册路由
import router from './router'

// 注册store
import store from './store/index'

// 第三方组件
import Vant from 'Vant'
import 'vant/lib/index.css'

// css全局样式
import '../static/css/reset.css'

// 引入mock
require('./mock/mockserver')

// 可以在这个地方一次性引入vant组件，但是会增加代码的体积，不推荐
Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  watch: {
    '$route.path': (to, from) => {
      console.log('this popup')
    }
  },
  mounted () {
    console.log('这是main的重新挂载')
  },
  template: '<App/>'
})
