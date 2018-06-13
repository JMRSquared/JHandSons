<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "materialize-css/dist/css/materialize.min.css";
var materialize = require("materialize-css/dist/js/materialize.min.js");
import "vue-animate/dist/vue-animate.min.css";

export default {
  name: "App"
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  scroll-behavior: unset;
  background-image: url("/static/img/Construction-Wallpaper-7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  padding-top: 10px;
}
</style>
