<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.showFooterNav"/>
  </div>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld'
*/
import FooterNav from './components/FooterNav/FooterNav'
export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style>
</style>
