<template>
  <div class="shop-goods-list">
    <div class="list-nav">
      <van-sidebar v-model="tActiveTag" @change="clickTag" >
        <van-sidebar-item :title="item" v-for="(item, idx) in shop.categories" :key="idx"/>
      </van-sidebar>
    </div>
    <div class="list-content-wrapper">
      <div class="block-title">
        [{{tCategroy}}]&nbsp;&nbsp;[{{tActiveTag}}]
      </div>
      <div class="list-content-viewport">
        <div class="list-content">
          <div class="fx-box" v-for="(item, idx) in shop.foods" :key="idx">
            <div class="fx-box--left">
                <img :src="item.img" alt="">
              </div>
            <div class="fx-box--right">
              <div class="fx-row-tittle">{{item.name}}</div>
              <div class="fx-row-info">{{item.des}}</div>
                <div class="fx-row-info">
                  <span>月售{{item.sellcount}}份</span>
                  <span>评分{{item.rating}}</span>
                </div>
                <div class="fx-row--lr">
                  <span>{{item.price}}￥</span>
                  <Add :food-id="item.id" :choose="tChoose[item.name]" :shop-name="shop.name" @reviseItemCount="reviseItemCount"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Utils from '../../../../../static/js/utils'
import BScroll from 'better-scroll'
import Add from './AddGoods/Add'

export default {
  props: {
    shop: Object
  },
  computed: {
    ...mapState(['tool'])
  },
  data () {
    return {
      tActiveTag: 0,
      tCategroy: '这是类别',
      tChoose: {}
    }
  },
  mounted () {
    Utils.setScaleF()
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    ...mapActions(['setToolChoose', 'setTooltotalCount', 'setTooltotalCountd', 'setTooltotalPrice', 'setToolclearPrice']),
    reviseItemCount (e, arg) {
      if (arg === 'add') {
        this.tChoose[this.shop.foods[e].name] && this.tChoose[this.shop.foods[e].name].count++
        !this.tChoose[this.shop.foods[e].name] && this.$set(this.tChoose, this.shop.foods[e].name, {
          id: this.shop.foods[e].id,
          count: 1
        })
        this.setTooltotalCount()
      } else if (arg === 'delete') {
        this.tChoose[this.shop.foods[e].name] && this.tChoose[this.shop.foods[e].name].count > 0 && this.tChoose[this.shop.foods[e].name].count--
        this.setTooltotalCountd()
      }
      this.setTooltotalPrice(this.shop.foods[e].price)
      this.setToolChoose(this.tChoose)
      if (this.tool.totalCount === 0) {
        this.setToolclearPrice()
      }
    },
    clickTag () {
      this.shopBScroll.scrollTo(0, this.tActiveTag * Utils.scaleToScreen(-(8 * 303.3 + 50)), 666)
    },
    initScroll () {
      let goodsListEl = document.querySelector('.shop-goods-list')
      let threhold = document.documentElement.clientHeight - Utils.scaleToScreen(298)
      goodsListEl.style.height = threhold + 'px'
      goodsListEl.children[1].children[1].style.height = threhold - Utils.scaleToScreen(60) + 'px'

      this.shopBScroll = new BScroll(goodsListEl.children[1].children[1], {
        scrollY: true,
        click: true,
        tab: true,
        disableMouse: false,
        disableTouch: false,
        probeType: 3,
        mouseWheel: true
      })

      this.shopBScroll.on('scroll', ({y}) => {
        /*        if (y > 60 && this.shopBScroll.enabled) {
            this.shopBScroll.options.preventDefault = false
          } */
        let cur = Math.floor(-y / (Utils.scaleToScreen(302) * 8))
        cur = cur < 1 ? 0 : cur
        this.tActiveTag = cur
      })
      // this.shopBScroll.disable()

      goodsListEl.addEventListener('touchstart', () => {
        if (document.documentElement.scrollTop > threhold && !this.shopBScroll.enabled) {
          this.shopBScroll.enable()
          this.shopBScroll.options.preventDefault = true
        }
        goodsListEl.addEventListener('touchend', () => {
          if (document.documentElement.scrollTop < threhold && this.shopBScroll.enabled) {
            this.shopBScroll.disable()
            this.shopBScroll.options.preventDefault = false
          }
        })
      })
    }
  },
  components: {
    Add
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../assets/css/util";
  /deep/ .van-sidebar {
    width: 250rem;
  }
  /deep/ .van-sidebar-item {
    padding: 50rem 35rem;
    color: #b2b2b2;
    line-height: 80rem;
    font-size: 40rem;
  }
  /deep/ .van-sidebar-item--select, .van-sidebar-item--select:active {
    color: #333333;
  }
  .shop-goods-list {
    position: sticky;
    top: 305rem;
    z-index: 900;
    display: flex;
    .list-nav {
      float: left;
      overflow: hidden;
    }
    .list-nav::-webkit-scrollbar,
    .list-content::-webkit-scrollbar {
      display: none;
    }

    .list-content-wrapper {
      position: relative;
      flex: 1;
      padding-left: 25rem;

      .block-title {
        line-height: 60rem;
        height: 60rem;
        font-size: 42rem;
        position:sticky;
        top:0;
        z-index: 900;
        background-color: white;
      }

      .list-content-viewport {
        flex: 1;
        position: relative;
        overflow: hidden;

        .list-content{
          position: absolute;
          z-index: 899;
          width: 98%;
        }

        .fx-box {
          padding-left: 0 !important;

          .fx-box--left {
            img {
              height: 256rem;
              width: 256rem;
            }
          }

          .fx-box--right {
            .fx-row-tittle, .fx-row-info, .fx-row-price {
              height: 64rem;
              line-height: 64rem;
            }

            .fx-row-tittle, .fx-row-price {
              font-size: 50rem;
              font-weight: bold;
            }

            .fx-row-info {
              color: rgb(134, 134, 134);
            }

            .fx-row--lr {
              display: flex;
              justify-content: space-between;

              span {
                color: #fe401e;
                font-size: 50rem;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
</style>
