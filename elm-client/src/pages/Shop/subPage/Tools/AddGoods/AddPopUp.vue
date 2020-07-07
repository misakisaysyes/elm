<template>
  <div>
    <van-popup v-model="tool.showPopUp"  position="bottom" :style="{ height: '80%'}" closeable >
      <div class="goods-info fx-box">
        <div class="fx-box--left">
          <img :src="showItem.img">
        </div>
        <div class="fx-box--right">
          <div class="fx-row">
            {{showItem.name}}
          </div>
          <div class="fx-row">
            {{showItem.des}}
          </div>
          <div class="fx-row">
            {{showItem.price}}￥
          </div>
        </div>
      </div>
      <div class="goods-option-container">
        <div v-for="(value, name) in showItem.options" :key="name">
          <div class="goods-option-name">
            {{value.type}}
          </div>
          <div class="goods-option-item-box">
            <Tag v-for="(item, idx) in value.opt"
                 :key="idx" :type="value.choose >= 0 && value.opt[value.choose] === item ? 'chooseoption' : 'goodsoption'"
                 :text="item"
                 @click.native="chooseOptions(name, idx)"/>
          </div>
        </div>
      </div>
      <div class="goods-submit" @click="closePopup">
        选好了
      </div>
    </van-popup>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Tag from '../../../../../components/Tag/Tag'
export default {
  props: {
    showItem: Object
  },
  computed: {
    ...mapState(['tool'])
  },
  mounted () {
  },
  methods: {
    ...mapActions(['setToolShowPopup', 'set']),
    chooseOptions (name, idx) {
      this.showItem.options[name].choose = idx
    },
    closePopup () {
      this.setToolShowPopup(!this.tool.showPopUp)
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../../assets/css/util";
  /deep/.van-overlay{
    z-index:10000 !important;
  }
  /deep/.van-popup{
    z-index:10001 !important;
    width: 94%;
    padding: 10rem 3%;
    /deep/.van-popup__close-icon--top-right{
      top: 30rem;
      right: 3%;
    }
    /deep/.van-popup__close-icon {
      font-size: 60rem;
    }
  }
  .goods-info {
    img {
      width: 256rem;
      height: 256rem;
    }
    .fx-box--right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .fx-row {
        flex:1;
        line-height: 85rem;
        font-size: 36rem;
        color:rgb(134, 134, 134);
        &:first-child, &:last-child {
          font-size: 56rem;
          font-weight: bold;
        }
        &:first-child {
          color: #333333;
        }
        &:last-child {
          color: #fe401e;
        }
      }
    }
  }
  .goods-option-container {
    margin-bottom: 10rem;
    overflow: hidden;
    .goods-option-name {
      clear: both;
      padding:0 25rem;
      line-height: 56rem;
      margin-bottom: 20rem;
      font-size: 42rem;
      color: rgb(134, 134, 134);
    }
  }
  .goods-submit {
    position:absolute;
    bottom: 35rem;
    left: 4%;
    width: 92%;
    line-height: 128rem;
    border-radius: 8rem;
    background-color: #0cabff;
    color: white;
    font-size: 45rem;
    text-align: center;
  }
</style>
