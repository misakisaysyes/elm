<template>
<!--timecounter插件制作-->
  <div :class="{food__container: type === 'food', daliy__container: type === 'daliy' }">
    <span>{{text}}</span>
    <ul>
      <li>{{hour}}</li>
      <li>:</li>
      <li>{{minute}}</li>
      <li>:</li>
      <li>{{second}}</li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    type: String,
    text: String
  },
  data () {
    return {
      hour: '',
      minute: '',
      second: ''
    }
  },
  mounted () {
    setInterval(() => {
      this.$nextTick(() => {
        this.hour = moment().format('HH')
        this.minute = moment().format('mm')
        this.second = moment().format('ss')
      })
    }, 1000)
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";

  .food__container,
  .daliy__container {
    display: flex;
    align-items: center;

    span {
      margin-right: 10rem;
    }

    li {
      float: left;
      height: 50rem;
      line-height: 50rem;
      text-align: center;
      width: 50rem;
      border-radius: 10rem;
      margin: 0 5rem;

      &:nth-child(2), &:nth-child(4) {
        width: fit-content;
        height: fit-content;
        background-color: transparent;
      }
    }
  }

  .food__container {
    color: #fe401e;
    font-size: 34rem;
    li {
      background-color: #fe401e;
      color: white;
      &:nth-child(2), &:nth-child(4) {
        color: #fe401e;
      }
    }
  }

  .daliy__container {
    span{
      color: #3e3e3e;
      font-size: 46rem;
      font-weight: 600;
    }
    li {
      background-color: #3e3e3e;
      color: white;
      &:nth-child(2), &:nth-child(4) {
        color: #3e3e3e;
      }
    }
  }
</style>
