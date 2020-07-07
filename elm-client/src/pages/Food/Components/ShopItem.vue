<template>
  <div>
    <div class="fx-box" @click="handleEvents(item)">
      <img :src="item.src" class="fx-box--left"/>
      <div class="fx-box--right">
        <div class="fx-row--lr shop-name">
          <span class="fx-left">{{item.name}}</span>
          <i class="iconfont icon-gengduo fx-right" id="dislike"></i>
        </div>
        <div class="fx-row shop-sell">
          <van-rate
            v-model="item.tool.stars"
            :size="15"
            color="#FE6402"
            void-icon="star"
            :count="1"
          />
          <span>{{item.rate}}</span>
          <span>月售{{item.sellCount}}</span>
        </div>
        <div class="fx-row--lr shop-send">
          <div class="fx-left">
            <span>起送￥{{item.startFee}}</span>
            <span>
              {{ item.sendFee===0 ? '免配送费' : '远距离配送'}}￥{{item.sendFee}}
              <i>￥3</i>
            </span>
          </div>
          <div class="fx-right">
            <span>{{item.time}}分钟</span>
            <span>{{item.dist}}km</span>
          </div>
        </div>
        <div class="fx-row shop-comment">
          <Tag :type="'comment'" :text="item.commentTag[0]"/>
        </div>
        <div class="fx-row--lr shop-tags">
          <div :class="{'fx-left': true, 'hidden-tags':item.tool.hideTag}">
              <Tag  v-for="(item, idx) in item.tags" :key="idx" :type="item.k" :text="item.v" style="float: left; margin-bottom: 10rem;"/>
          </div>
          <div class="fx-right">
            <van-icon name="arrow-up" color="#9a9a9a" v-show="!item.tool.hideTag" id="hideTag-up" />
            <van-icon name="arrow-down" color="#9a9a9a" v-show="item.tool.hideTag" id="hideTag-down"/>
          </div>
        </div>
        <div class="fx-row--lr shop-around">
          <span class="fx-left">附近有四家叫炸鸡</span>
          <van-icon name="arrow-down" color="#9a9a9a" class="fx-right" id="popUp"/>
        </div>
      </div>
      <transition name="fade">
        <div class="shop-cover" v-if="item.tool.dislike" id="dislike-cover">
          <button class="shop-cover-btn" v-if="item.tool.dislike" id="dislike-btn">不喜欢</button>
        </div>
      </transition>

      <van-overlay :show="item.popUp">
        <div class="popup-wrapper" id="popUp-cover">
          <!-- 点击该元素跳转到商店页面 -->
          <div class="popup-block">
            这是商店周边信息
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Tag from '../../../components/Tag/Tag'
export default {
  props: {
    item: Object
  },
  computed: {
    ...mapState(['shopInfo', 'shopOrder'])
  },
  methods: {
    toggleBtn (item, flag) {
      item.tool[flag] = !item.tool[flag]
    },
    goto (str) {
      this.$router.push(str)
    },
    handleEvents (item) {
      console.log(item)
      switch (true) {
        case event.target.id.includes('dislike') || event.target.id.includes('hideTag'):
          let str = event.target.id.includes('dislike') ? 'dislike' : 'hideTag'
          this.toggleBtn(item, str)
          break
        case event.target.id.includes('popUp') :
          item.popUp = !item.popUp
          break
        default:
          this.goto(`/shop/${item.name}`)
          break
      }
    },
    test (str) {
      console.log(str)
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/css/util";

  /* test style */
  .popup-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .popup-block {
    background-color: #fff;
    z-index: 9999;
  }

  /deep/.van-overlay {
    z-index:9991;
  }

  .fx-box {
    position: relative;
    padding-top:30rem;
    padding-bottom: 0;
    .fx-box--left {
      height: 250rem;
      width: 250rem;
      border-radius: 10rem;
    }
    .fx-box--right {
      .fx-row, .fx-row--lr {
        height: 64rem;
        line-height: 64rem;
      }
      .shop-name {
        font-size: 42rem;
        font-weight: 600;
      }
      .shop-sell {
        color: #9a9a9a;
        font-size: 20rem;
        span {
          margin-left: 15rem;
          &:nth-child(2) {
            color: #FE6402;
          }
        }
      }
      .shop-send {
        color: #9a9a9a;
        font-size: 20rem;
        overflow: hidden;
        span {
          margin-right: 10rem;
          i {
            text-decoration: line-through;
            color: #dddddd;
          }
        }
      }
      .shop-comment {
        overflow: hidden;
      }

      .shop-tags {
        position: relative;
        .fx-left {
          width: 92%;
          padding:10rem 8% 10rem 0;
          border-bottom: 1rem #eee solid;
        }
        .fx-right {
          position: absolute;
          top:0;
          right:0;
        }
        .hidden-tags {
          height: 100%;
          overflow: hidden;
        }
      }

      .shop-around {
        padding: 10rem 0;
        clear: both;
        border-bottom: 1rem #eee solid;
        color: #9a9a9a;
        .fx-right {
          margin-top: 10rem;
        }
      }
    }

    /* 遮罩层 */
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .shop-cover {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      overflow: hidden;
      .shop-cover-btn {
        width: 150rem;
        height: 150rem;
        border: none;
        border-radius: 75rem;
        position: absolute;
        background-color: #f7f7f7;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
</style>
