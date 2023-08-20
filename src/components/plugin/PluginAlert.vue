<template>
  <v-snackbar
    :value="alert.show"
    :timeout="timeout"
    class="plugin__alert border-radius-16"
    max-width="400px"
    @input="close"
    top
    light
  >
    <div class="d-flex align-center">
      <div class="alert-icon">
        <v-img :src="icon"></v-img>
      </div>
      <div class="ml-6 flex-grow-1">
        <div class="font-weight-bold text-md">{{ alert.title }}</div>
        <div
          class="text-md neutral70--text"
          v-html="alert.message"
          v-if="alert.message"
        ></div>
      </div>
      <div class="align-self-start">
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      alert: this.$alert.alertData,
    };
  },
  computed: {
    icon() {
      switch (this.alert.type) {
        case "error":
          return require("@/assets/components/snackbar/Alert.png");
        case "success":
          return require("@/assets/components/snackbar/Success.png");
        case "info":
        default:
          return require("@/assets/components/snackbar/Success.png");
        case "warning":
          return require("@/assets/components/snackbar/Warning.png");
      }
    },
    color() {
      return {
        error: "error",
        success: "success",
        warning: "yellow darken-2",
      }[this.alert.type];
    },
    timeout() {
      if (this.alert.isLastMessage) return 15000;
      return (
        {
          error: 8000,
        }[this.alert.type] || 5000
      );
    },
  },
  methods: {
    close() {
      this.$alert.close();
    },
  },
};
</script>

<style lang="scss">
.plugin__alert {
  .v-snack__content {
    padding: 16px;
  }
}
</style>


<style scoped>
.alert-icon {
  width: 40px;
  height: 40px;
}
</style>
