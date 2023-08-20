<template>
  <div
    class="btn-default cursor-pointer d-flex justify-center align-center"
    @click="onButtonClick"
  >
    <v-icon color="gray500" size="16px">{{ icon || "mdi-menu" }}</v-icon>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
  methods: {
    onButtonClick() {
      this.$emit("onClick");
    },
  },
};
</script>
