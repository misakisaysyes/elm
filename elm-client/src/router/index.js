import Vue from 'vue'
import Router from 'vue-router'

// 导入路由组件
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Food from '../pages/Food/Food'
import Daliy from '../pages/Daliy/Daliy'
import Order from '../pages/Order/Order'
import Shop from '../pages/Shop/Shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showFooterNav: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/',
      name: 'Food',
      component: Food,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/daliy',
      name: 'Daliy',
      component: Daliy,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooterNav: true
      }
    },
    {
      path: '/shop/:shopId',
      props: true,
      name: 'Shop',
      component: Shop,
      meta: {
        showFooterNav: false
      }
    }
  ]
})
