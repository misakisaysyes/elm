<template>
  <div class="bonus-wrapper" :style="{backgroundImage: 'url(' + bg_imgurl + ')', backgroundSize: '100% 100%'}">
    <div class="bonus-bgcover">
      <div class="bonus-title" :style="{backgroundColor: tColors[title_bgcolor]}">
        <slot name="title"></slot>
      </div>
      <div class="bonus-content">
        <!--slot中的样式都要写在父组件上-->
        <div class="bonus-content-text">
          <slot name="content"></slot>
        </div>
        <TimeCounter v-show="plugin === 'timecounter'" :text="'17点场'" :type="'food'"/>
        <Tag v-show="plugin === 'tag'" :type="'go'" :text="'GO'"/>
        <div v-show="plugin !== 'timecounter' && plugin !== 'tag'">{{plugin}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeCounter from '../TimeCounter/TimeCounter'
import Tag from '../Tag/Tag'
export default {
  props: {
    bg_imgurl: String,
    title_bgcolor: {
      type: String,
      default: 'red' /* blue */
    },
    plugin: {
      type: String,
      default: 'text' /* tags, timecounter */
    }
  },
  data () {
    return {
      tColors: {
        red: '#fe401e',
        blue: '#06a8f3'
      }
    }
  },
  components: {
    TimeCounter,
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  /**
  *设置背景，边距
  */
  .bonus-wrapper {
    height: 410rem;
    width: 500rem;
    border-radius: 25rem;
    float: left;
    margin: 5rem;
    /**
    *背景cover
    */
    .bonus-bgcover {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 25rem;
      position: relative;
      /**
      *插件title样式
      */
      .bonus-title {
        color: white;
        font-size: 40rem;
        padding: 20rem 50rem;
        border-radius: 0 0 10rem 10rem;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      /**
      *插件content样式
      */
      .bonus-content {
        height: 40%;
        width: 92%;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 15rem;
        position: absolute;
        bottom: 20rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .bonus-content-text {
          font-size: 42rem;
          font-weight: 600;
          color: #333333;
        }
      }
    }
  }
</style>
