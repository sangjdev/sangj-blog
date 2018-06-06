<template>
    <div class="app-wrapper" v-cloak>
        <transition name="fade" mode="out-in">
            <app-header></app-header>
        </transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <app-footer></app-footer>
        <!-- <transition appear name="fade" mode="out-in">
            <app-header></app-header>
        </transition>
        <transition appear name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition appear name="fade" mode="out-in">
            <app-footer></app-footer>
        </transition> -->
    </div>
</template>

<script>
import AppHeader from "./components/header.vue";
import AppFooter from "./components/footer.vue";

export default {
  name: "layout",
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    console.log("1등");
  },
  mounted() {
    console.log("4등 마운트");
  },
  updated() {
      console.log("updated-layout.vue-updated");
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
[v-cloak] {
  display: none;
}
</style>