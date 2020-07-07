<template>
  <div>
    <div class="fx-box">
      <img class="fx-box--left" src="static/img/Daliy/daliy_food6.PNG"/>
      <div class="fx-box--right">
        <div class="fx-row info-name">
          汉堡王（恒丰步行街店）
        </div>
        <div class="fx-row-lr info-rate">
          <div class="fx-left">
            <van-rate v-model="value" void-icon="star" void-color="#eee" color="#fe5900" allow-half/>
          </div>
          <div class="fx-right">1.7km</div>
        </div>
        <div class="fx-row info-tag">
          <Tag :type="'daliytag'" :text="'云岩区热情销榜第一名'"/>
          <Tag :type="'daliytag'" :text="'品质极好'"/>
        </div>
        <div class="fx-row info-dish">
          ￥10 | 培根蛋肉蛋贝果餐
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../Tag/Tag'
export default {
  data () {
    return {
      value: 2.5
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .fx-box {
    margin-top: 30rem;
    width: 95%;
    background-color: white;
    .fx-box--left {
      height: 280rem;
      width: 280rem;
    }
    .fx-box--right {
      .fx-row, .fx-row--lr {
        height: 70rem;
        line-height: 70rem;
      }
      .info-name {
        font-size: 40rem;
        font-weight: 600;
        color: #333333;
      }
      .info-rate {
        color: #9a9a9a;
      }
      .info-tag {
        display: flex;
      }
      .info-dish {
        width: 666rem;
        font-size: 40rem;
        color:#fe5900;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  /deep/ .van-rate__item:not(:last-child) {
    padding-right: 40rem;
  }
  /deep/.van-rate__icon--half {
    width: 15rem;
  }
</style>
