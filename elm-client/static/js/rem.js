// 搞半天我还是在用rem
// const baseSize = 32
function setRem () {
  // 因为这里设计稿是截图，所以宽度为1080
  const scale = document.documentElement.clientWidth / 1080
  // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  document.documentElement.style.fontSize = scale + 'px'
  console.log('适配方案')
}
setRem()
window.onresize = function () {
  setRem()
}
