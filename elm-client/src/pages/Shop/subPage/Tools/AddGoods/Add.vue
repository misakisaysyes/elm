<template>
  <div @click="handleEvent">
    <div class="shop__order-op">
      <transition :name="'slide-fade'">
        <div v-show="choose&&(choose.count!='')" style="height: 100%; line-height: 100%; vertical-align: center">
          <van-icon class-prefix="iconfont" name="delete" class="van-icon delete"/>
          <span>{{choose ? choose.count : ''}}</span>
        </div>
      </transition>
      <van-icon name="plus" />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'Vuex'
export default {
  props: {
    shopName: String,
    foodId: Number,
    choose: Object
  },
  methods: {
    ...mapActions(['setToolShowPopup', 'setToolFoodID']),
    handleEvent () {
      if (event.target.className.includes('van-icon-plus')) {
        (!this.choose || (this.choose && this.choose.count <= 0)) && this.setToolShowPopup(true);
        (!this.choose || (this.choose && this.choose.count <= 0)) && this.setToolFoodID(this.foodId)
        this.$emit('reviseItemCount', this.foodId, 'add')
      }
      if (event.target.className.includes('delete')) {
        this.$emit('reviseItemCount', this.foodId, 'delete')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../../assets/css/util";
  .shop__order-op {
    display: flex;
    align-items: center;
    i {
      font-size: 50rem;
      font-weight: 600;
      background-color: #1d97ff;
      color:white;
      border: 5rem #1d97ff solid;
      border-radius: 40rem;
    }
    span {
      font-size: 36rem;
      padding: 0 25rem 0 10rem;
      color: #333333;
      font-weight: bold;
    }
  }
  .van-overlay{
    z-index: 999999!important;
  }
  .delete {
    color: #1d97ff !important;
    background-color: white !important;
  }
  .slide-fade-enter-active {
    transition: all .25s ease;
  }
  .slide-fade-leave-active {
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20rem);
    opacity: 0;
  }
</style>
