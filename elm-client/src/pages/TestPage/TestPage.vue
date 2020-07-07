<template>
  <div>
    <!-- 宽度自适应方案1: 浮动 -->
    <!-- 细节描述：左栏定长。右栏宽度自适应 -->
    <div class="ft-box">
      <div class="ft-box--left">
        this is left one
      </div>
      <div class="ft-box--right">
        <div class="ft-row">
          this is right one
        </div>
        <div class="ft-row--lr">
          <div class="ft-left">
            right two
          </div>
          <div class="ft-right">
            right two
          </div>
        </div>
      </div>
    </div>
    <!-- 宽度自适应方案2: 弹性盒 -->
    <div class="fx-box">
      <div class="fx-box--left">
        this is left one
      </div>
      <div class="fx-box--right">
        this is right one
        <div class="fx-row">
          this is fx-row
        </div>
        <div class="fx-row--lr">
          <div class="fx-left">left</div>
          <div class="fx-right">right</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .ft-box {
    overflow: hidden; // 开启bfc
    margin: 0 auto;   // 居中设置
    padding: 25rem;
    margin: 3%;
    border-radius: 6rem;

    /* test */
    background-color: #0cabff;

    .ft-box--left {
      float: left;

      /* 自设1 width height*/
      width: 200rem;
      height: 200rem;
      background-color: #fe401e;
    }

    .ft-box--right {
      /* 自设2 padding-left width*/
      /* 其中padding-left参照‘自设1’处width */
      padding-left: 230rem;

      background-color: #FFEEE2;
      .ft-row, .ft-row--lr {
        /* 自设3 height*/
        height: 60rem;
        background-color: orange;
      }

      .ft-row--lr{
        overflow: hidden; //开启bfc
        background-color: #9a9a9a;

        .ft-left {
          float: left;
        }
        .ft-right {
          float: right;
        }
      }
    }
  }

  .fx-box {
    margin: 0 auto;   // 居中设置
    padding: 25rem;
    margin: 3%;
    border-radius: 6rem;
    display: flex;
    background-color: #fe401e;

    .fx-box--left {
      float: left;
      /* 自设width height */
      width: 200rem;
      height: 200rem;
      background-color: #FFEEE2;
    }

    .fx-box--right {
      flex: 1;
      margin-left: 30rem;
      background-color: #0cabff;
      .fx-row, .fx-row--lr {

      }
      .fx-row--lr {
        .fx-left {
          float: left;
        }
        .fx-right{
          float: right;
        }
      }
    }
  }
</style>
