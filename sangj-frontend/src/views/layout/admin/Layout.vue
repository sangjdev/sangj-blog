<template>
<div class="app-wrapper">
	<div class="sidebar-container">
		<app-sidebar></app-sidebar>
	</div>
  <div class="main-container">
	  <app-header></app-header>
	  <div class="main-content">
		<router-view></router-view>
	  </div>
  </div>
</div>
</template>

<script>
import AppSidebar from "./components/sidebar.vue"
import AppHeader from "./components/header.vue"

export default {
  name: "layout",
  components: {},
  data() {
    return {};
  },
  components: {
	  AppSidebar,
	  AppHeader
  }
};
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100% !important;
}
.sidebar-container {
  width: 200px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  margin-left: 200px;
  min-height: 100%;
}
.main-content {
  padding: 20px 20px 0 20px;
}
</style>