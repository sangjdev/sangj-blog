<template>
    <div class="app-wrapper">
        <transition appear name="fade" mode="out-in">
            <app-header></app-header>
        </transition>
        <transition appear name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition appear name="fade" mode="out-in">
            <app-footer></app-footer>
        </transition>
    </div>
</template>

<script>
import AppHeader from "./components/header.vue";
import AppFooter from "./components/footer.vue";

export default {
  name: "layout",
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<style scoped>

</style>