<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper d-flex full-height full-width">
    <!-- <NavigationDrawer /> -->
    <NavigationBar />
    <div class="container pa-0 ma-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // NavigationDrawer: () => import("@/components/NavigationDrawer.vue"),
    NavigationBar: () => import("@/components/NavigationBar.vue"),
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.wrapper {
  background-color: var(--v-secondary-base) !important;
}
.container {
  width: 100vw !important;
  background-color: var(--v-secondary-base) !important;
  animation: fadeleft 1s ease-in-out;
}
</style>
