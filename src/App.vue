<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/head.vue";
import Footer from "@/components/foot.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  padding-top: 4.76rem;
  padding-bottom: 18.36rem;
  position: relative;
}
</style>
