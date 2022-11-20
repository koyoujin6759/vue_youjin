<template>
  <div id="app">
    <AppHeader></AppHeader>
    <img src="./assets/logo.png">
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
// import AppContent from '@/components/AppContent.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // AppContent
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
