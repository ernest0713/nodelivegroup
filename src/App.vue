<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello World"/> -->
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
