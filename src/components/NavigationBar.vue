<template>
  <v-app-bar height="56px" color="white" elevation="2" app clipped-left>
    <div class="full-width d-flex justify-space-between">
      <div class="d-flex align-center">
        <IconButton icon="mdi-menu" />
        <div class="text-dp-xs font-weight-bold ml-2">iDas</div>
      </div>
    </div>
    <div class="d-flex align-center gap-16">
      <v-btn small icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-calendar-outline</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <div class="avatar-img">
        <v-img
          class="rounded-xl"
          :src="require(`@/assets/images/user-profile.webp`)"
        />
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapStores } from "pinia";
import { userStore } from "@/stores/userStore";

export default {
  computed: {
    ...mapStores(userStore),
  },
  components: {
    IconButton: () => import("./IconButton.vue"),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 32px;
  height: 32px;
}
</style>
