<template>
  <div id="app">
    <Viewer />
    <Repository />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Viewer from "./components/Viewer.vue";
import Repository from "./components/Repository.vue";

export default Vue.extend({
  name: "App",
  components: {
    Viewer,
    Repository
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
</style>
