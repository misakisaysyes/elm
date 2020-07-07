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

export default {
  [GET_SHOPINFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [SET_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [TOOL_SHOWPOPUP] (state, {toolShowPopup}) {
    state.tool.showPopUp = toolShowPopup
  },
  [TOOL_FOODID] (state, {foodId}) {
    state.tool.foodId = foodId
  },
  [TOOL_CHOOSE] (state, {choose}) {
    state.tool.choose = choose
  },
  [TOOL_TOTALCOUNT] (state) {
    state.tool.totalCount += 1
  },
  [TOOL_TOTALCOUNTD] (state) {
    state.tool.totalCount -= 1
  },
  [TOOL_TOTALPRICE] (state, {price}) {
    state.tool.totalPrice += price
  },
  [TOOL_CLEARPRICE] (state) {
    state.tool.totalPrice = 0
  },
  [SET_SHOPORDER] (state, {mode}) {
    if (mode === 'init') {
      for (let key in state.shopInfo) {
        state.shopOrder.push(key)
      }
    } else {
      let buff = []
      for (let key in state.shopInfo) {
        buff.push(state.shopInfo[key][mode])
      }
      quickSort(0, buff.length - 1, state, buff)
    }
  }
}

function quickSort (low, high, state, arr) {
  if (high < low) {
    return
  }

  let i = low
  let j = high
  let pivot = arr[low]
  let pkey = state.shopOrder[low]
  while (i < j) {
    for (; i < j && arr[j] >= pivot; j--) ;
    if (i < j) {
      state.shopOrder[i] = state.shopOrder[j]
      arr[i++] = arr[j]
    }

    for (; i < j && arr[i] <= pivot; i++) ;
    if (i < j) {
      state.shopOrder[j] = state.shopOrder[i]
      arr[j--] = arr[i]
    }
  }
  arr[j] = pivot
  state.shopOrder[j] = pkey

  quickSort(low, j - 1, state, arr)
  quickSort(j + 1, high, state, arr)
}
