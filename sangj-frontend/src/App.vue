<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@font-face {
  font-family: "Noto Sans CJK KR Medium";
  src: url("./assets/fonts/NotoSansCJKkr-Medium.otf");
}
@font-face {
  font-family: "Noto Sans CJK KR DemiLight";
  src: url("./assets/fonts/NotoSansCJKkr-DemiLight.otf");
}
@font-face {
  font-family: "IropkeBatangM";
  src: url("./assets/fonts/IropkeBatangM.otf");
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans CJK KR DemiLight", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
ul,
li {
  /* list-style: none; */
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
