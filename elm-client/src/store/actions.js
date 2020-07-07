import {
  SET_USERINFO,
  TOOL_SHOWPOPUP,
  TOOL_FOODID,
  TOOL_CHOOSE,
  TOOL_TOTALCOUNT,
  TOOL_TOTALCOUNTD,
  TOOL_TOTALPRICE,
  TOOL_CLEARPRICE,
  GET_SHOPINFO,
  SET_SHOPORDER
} from './mutation-types'
import {
  reqShopInfo
} from '../api'
/*
* import function from api
* */

export default {
  async getShopInfo ({commit}) {
    let res = await reqShopInfo()
    if (res.data.code === 0) {
      commit(GET_SHOPINFO, {shopInfo: res.data.data})
    }
  },
  setShopOrder ({commit}, mode) {
    commit(SET_SHOPORDER, {mode})
  },
  UserInfo ({commit}, userInfo) {
    commit(SET_USERINFO, {userInfo})
  },
  setToolShowPopup ({commit}, toolShowPopup) {
    commit(TOOL_SHOWPOPUP, {toolShowPopup})
  },
  setToolFoodID ({commit}, foodId) {
    commit(TOOL_FOODID, {foodId})
  },
  setToolChoose ({commit}, choose) {
    commit(TOOL_CHOOSE, {choose})
  },
  setTooltotalCount ({commit}) {
    commit(TOOL_TOTALCOUNT)
  },
  setTooltotalCountd ({commit}) {
    commit(TOOL_TOTALCOUNTD)
  },
  setTooltotalPrice ({commit}, price) {
    commit(TOOL_TOTALPRICE, {price})
  },
  setToolclearPrice ({commit}) {
    commit(TOOL_CLEARPRICE)
  }
}
