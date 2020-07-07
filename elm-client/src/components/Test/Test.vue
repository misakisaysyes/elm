<template>
  <div>
    <div @click="test('r')">
      <div style="height:500rem; width:100%; background-color: gold" @click="test('w')">
        测试包裹元素
        <span style="display: block; height:100rem; width: 100rem;" @click="test('c')">
          点击元素
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    test (str) {
      console.log('测试点击')
      console.log(str)
    }
  }
}
</script>

<style scoped>

</style>
