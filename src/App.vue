<template>
  <navbar-page></navbar-page>
  <div class="app">
    <router-view></router-view>
  </div>
  <footer-page></footer-page>
</template>

<script>
import NavbarPage from "@/components/NavbarPage";
import FooterPage from "@/components/FooterPage";

export default {
  name: 'App',
  components: {
    NavbarPage,
    FooterPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #FFFFE0;
}
</style>
