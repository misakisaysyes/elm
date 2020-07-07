<template>
  <div>
    <van-tag v-if="type==='go'" round type="danger" class="go">{{text}}</van-tag>
    <van-tag v-if="type==='top'" class="top">{{text}}</van-tag>
    <van-tag v-if="type==='foodnavtag'" :class="{foodnavtag: true, on_: on}">{{text}}</van-tag>
    <van-tag v-if="type==='comment'" class="comment">{{text}}</van-tag>
    <van-tag v-if="type==='firstorder'" class="firstorder">{{text}}</van-tag>
    <van-tag v-if="type==='discount'" class="discount">{{text}}</van-tag>
    <van-tag v-if="type==='allowance'" class="allowance">{{text}}</van-tag>
    <van-tag v-if="type==='member'" class="member">{{text}}</van-tag>
    <van-tag v-if="type==='attr'" class="attr">{{text}}</van-tag>
    <van-tag v-if="type==='daliytag'" class="daliytag">{{text}}</van-tag>
    <van-tag v-if="type==='shopvip'" class="shopvip">{{text}}</van-tag>
    <van-tag v-if="type==='shoptags'" class="shoptags">{{text}}</van-tag>
    <van-tag v-if="type==='shopfoodtag'" class="shopfoodtag">{{text}}</van-tag>
    <van-tag v-if="type==='goodsoption'" class="goodsoption">{{text}}</van-tag>
    <van-tag v-if="type==='chooseoption'" class="chooseoption">{{text}}</van-tag>
    <van-tag v-if="type==='buycount'" class="buycount">{{count}}</van-tag>

    <van-tag v-if="type==='shopcomment-good'" class="shopcomment--good">{{text}}</van-tag>
    <van-tag v-if="type==='shopcomment-bad'" class="shopcomment--bad">{{text}}</van-tag>
    <van-tag v-if="type==='shopcomment-choose'" class="shopcomment--choose">{{text}}</van-tag>

  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    count: Number,
    on: Boolean
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../assets/css/util";
  .go {
    line-height: 40rem;
    font-size: 30rem;
  }
  .top {
    background-color: #271b0d;
    color: #f0dab5;
    font-size: 38rem;
    padding: 6rem 20rem;
  }
  .foodnavtag {
    background-color: #f3f3f3;
    color: #2f2f2f;
    font-size: 20rem;
    padding: 20rem 40rem;
    border-radius: 10rem;
  }
  .on_ {
    color:#06a8f3;
    background-color: aliceblue;
  }
  .comment {
    background-color: #FFEEE2;
    color: #FE6402;
    padding: 3rem 0;
    border-radius: 6rem;
    margin-right: 12rem;
  }

  .firstorder, .allowance, .discount, .member, .attr, .daliytag {
    padding: 2rem 5rem;
    margin-right: 7rem;
  }

  .firstorder {
    background-color: #FF4B34;
    color: white;
    border: 1rem #FF4B34 solid;
  }
  .discount {
    color: #FF4B34;
    background-color: white;
    border: 2rem #FFEEE2 solid;
  }
  .allowance {
    background-color: #FFEEE2;
    color: #FF4B34;
    border: 1rem #FFEEE2 solid;
  }
  .member {
    background-color: white;
    color: #E1AA57;
    border: 1rem #E1AA57 solid;
  }
  .attr {
    background-color: white;
    color: @tipfontc--deep;
    border: 1rem @tipfontc--deep solid;
  }
  .daliytag {
    background-color: #f6f6f6;
    color: #333333;
    border: 1rem #f6f6f6 solid;
  }
  .shopvip {
    color: rgb(123, 75, 13);
    background-color: rgb(253, 230, 116);
    padding: 8rem 20rem;
    font-size: 34rem;
    font-weight: bold;
    border-radius: 8rem;
  }
  .shoptags, .shopfoodtag {
    padding: 0rem;
    font-size: 14rem;
    background-color: white;
  }
  .shoptags {
    color: #fe401e;
    border: 1rem #fe401e solid;
  }
  .shopfoodtag {
    color: #9a9a9a;
    border: 1rem #9a9a9a solid;
  }
  .goodsoption, .chooseoption {
    float: left;
    font-size: 38rem;
    width: 25.5%;
    margin: 10rem 2% 20rem 2%;
    line-height: 90rem;
    display: flex;
    justify-content: center;
  }

  .goodsoption {
    color: #333333;
    background-color: #eeeeee;
  }

  .chooseoption {
    color:#06a8f3;
    background-color: aliceblue;
  }

  .buycount {
    font-size: 20rem;
    color: white;
    padding: 0 20rem;
    background-color: #fe401e;
    border-radius: 20rem;
  }

  .shopcomment--good, .shopcomment--bad, .shopcomment--choose {
    padding: 28rem;
    font-size: 36rem;
    float: left;
    margin: 15rem;
  }

  .shopcomment--good {
    background-color: aliceblue;
    color: #969799;
  }

  .shopcomment--bad {
    background-color: #eeeeee;
    color: #b2b2b2;
  }

  .shopcomment--choose {
    background-color: #06a8f3;
    color: white;
  }
</style>
