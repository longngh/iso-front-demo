<template>
  <div
    v-show="loading.active"
    class="plugin__loading"
  >
    <v-progress-circular indeterminate />
  </div>
</template>

<script>
export default {
  props: {
    fluid: Boolean,
    size: String,
    color: { type: String, default: '' },
    fixed: Boolean
  },
  data () {
    return {
      loading: this.$loading
    }
  }
}
</script>

<style lang="scss">
.plugin__loading {
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, .7);
  font-size: 60px;
}
.application.theme--dark .plugin__loading {
  background: rgba(0, 0, 0, .7);
}
</style>
