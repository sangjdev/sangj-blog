<template>
 <!-- v-cloak -->
  <div id="app">
    <!-- <transition appear name="fade" mode="out-in">
       <app-header></app-header>
    </transition> -->
    <!-- <transition appear name="fade" mode="out-in"> -->
       <router-view></router-view>
    <!-- </transition> -->
    <!-- <transition appear name="fade" mode="out-in">
      <app-footer></app-footer>
    </transition> -->
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
[v-cloak] {
  display: none;
}
#app {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  outline: none;
}
.main-title {
  font-size: 20px;
}
</style>
