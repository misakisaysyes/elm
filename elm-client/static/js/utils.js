// 浏览器的缓存是给通信使用的
import Velocity from 'velocity-animate'

// 私有常量
let scaleFactor = 0

export default {
  setScaleF () {
    scaleFactor = 1080 / document.documentElement.clientWidth
  },
  scaleToScreen (t) {
    return t / scaleFactor
  },
  scaleToDesign (t) {
    return t * scaleFactor
  },
  headerAnimation (headerTopEl, shopContentEl) {
    console.log('执行headerAnimation')

    let headerBg = headerTopEl.children[0]
    let headerIcon = headerTopEl.children[1]
    let headerSearch = headerTopEl.children[2]
    let shopImg = document.getElementById('shopImg')

    let hbObserver = new MutationObserver((mutations) => {
      for (var mutation of mutations) {
        headerSearch.style.opacity = mutation.target.style.opacity
        let c = 255 - 255 * mutation.target.style.opacity
        headerIcon.style.color = `rgb(${c}, ${c}, ${c})`
        headerIcon.children[1].children[0].style.opacity = 1 - mutation.target.style.opacity

        let len = this.scaleToScreen(200) * (1 - mutation.target.style.opacity)
        shopImg.style.height = len + 'px'
        shopImg.style.width = len + 'px'
        shopImg.style.bottom = '-10%'
      }
    })
    hbObserver.observe(headerBg, {attributes: true})

    window.onscroll = () => {
      let factor = this.scaleToDesign(document.documentElement.scrollTop || document.body.scrollTop)
      let buf = (factor - 40) / 100
      headerBg.style.opacity = (buf > 1) ? 1 : (buf > 0 ? buf : 0)
    }
  },
  dropDownAnimation (viewPortEl, drection) {
    console.log('执行dropDownAnimation')

    let startH = viewPortEl.offsetHeight
    if (drection === 'down') {
      Velocity(viewPortEl, {height: [document.documentElement.clientHeight - viewPortEl.offsetTop, 'easeOutSine', startH]}, {duration: 1234})
      Velocity(viewPortEl.children[0], {opacity: [0, 1]}, {duration: 321})
      Velocity(viewPortEl.children[1], {opacity: [1, 0]}, {duration: 432})
    } else {
      Velocity(viewPortEl, {height: [this.scaleToScreen(200), 'easeOutSine', startH]}, {duration: 1234})
      Velocity(viewPortEl.children[0], {opacity: [1, 0]}, {duration: 432})
      Velocity(viewPortEl.children[1], {opacity: [0, 1]}, {duration: 321})
    }
  },
  touchDropDownAnimation (shopContentEl, viewPortEl, that) {
    console.log('执行touchDropDownAnimation')
    shopContentEl.ontouchstart = (e) => {
      console.log('下拉动画ontouchstart')
      let curHeight = -1
      let prePos = -1
      let curPos = e.changedTouches[0].clientY
      let changed = false

      shopContentEl.ontouchmove = (e) => {
        console.log('下拉动画ontouchmove')
        prePos = curPos
        curPos = e.changedTouches[0].clientY
        curHeight = viewPortEl.offsetHeight + curPos - prePos
        let scaleCurHeight = this.scaleToDesign(curHeight) // 牺牲空间换时间
        if (!(document.documentElement.scrollTop || document.body.scrollTop) && scaleCurHeight > 200) {
          // 阻止默认事件
          // e.preventDefault()
          viewPortEl.style.height = curHeight + 'px'
          // 设置透明度 这里设置立即执行函数解决
          let opacityFactor = (scaleCurHeight - 200) / 150 // 牺牲空间换时间
          viewPortEl.children[0].style.opacity = 1 - 1.5 * opacityFactor
          viewPortEl.children[1].style.opacity = opacityFactor
        }
      }

      shopContentEl.ontouchend = (e) => {
        console.log('下拉动画ontouchend')
        if (curHeight > this.scaleToScreen(200)) {
          if (this.scaleToDesign(curHeight) > 365) {
            // 自动下拉
            let targetHeight = document.documentElement.clientHeight - viewPortEl.offsetTop
            Velocity(viewPortEl, {height: [targetHeight, 'easeOutSine', curHeight]}, {duration: 666})
            if (prePos > 0 && !changed) {
              changed = true
              that.tConcealFooter = !(prePos - curPos > 0)
            }
          } else {
            // 自动弹回
            Velocity(viewPortEl, {height: [this.scaleToScreen(200), 'easeOutSine', curHeight]}, {duration: 333})
            Velocity(viewPortEl.children[0], {opacity: [1, 0]}, {duration: 320})
            Velocity(viewPortEl.children[1], {opacity: [0, 1]}, {duration: 222})
          }
        }
      }
    }
  },
  mutationViewPort (viewPortEl) {
    console.log('执行mutationViewPort')

    let velocityObj = null
    let targetBottom = document.documentElement.clientHeight

    let vpObserver = new MutationObserver(mutations => {
      for (var mutation of mutations) {
        if (targetBottom < mutation.target.offsetTop + mutation.target.offsetHeight + 6.66) {
          // 保证只有一次操作
          if (!velocityObj) {
            velocityObj = Velocity(mutation.target.children[2], {opacity: [1, 0]}, {duration: 222})
          }
        } else {
          // 保证只有一次操作
          if (velocityObj) {
            mutation.target.children[2].style.opacity = 0
            velocityObj = null
          }
        }
      }
    })
    vpObserver.observe(viewPortEl, {attributes: true})
  }
}
