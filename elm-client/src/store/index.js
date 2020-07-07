/* vuex核心管理模块
* 主要分为三个部分
* 1.导入
* 2.Vue.use(Vuex)
* 3.export default
* */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
