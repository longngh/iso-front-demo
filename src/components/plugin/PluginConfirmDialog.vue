<template>
  <v-dialog v-model="dialog.state" max-width="360px">
    <v-card class="pa-6">
      <v-card-title class="pa-0 title--text card-title mb-4 font-weight-bold">
        {{ dialog.title }}<v-spacer />
      </v-card-title>
      <v-card-text
        class="card-content mx-auto pa-0 mb-5"
        style="max-width: 450px"
      >
        <div
          name="top-content"
          style="white-space: pre-line"
          v-html="dialog.topContent"
        />
        <div name="mid-content" class="mt-2" v-html="dialog.midContent" />
        <div name="bottom-content" class="mt-2" v-html="dialog.botContent" />
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-btn
          v-show="!dialog.hideCancel"
          class="px-6 btn text-none"
          outlined
          dense
          @click="cancel"
        >
          {{ dialog.cancelText }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-show="!dialog.hideOk"
          color="primary"
          class="px-6 btn text-none elevation-0 ml-4"
          dense
          @click="done"
        >
          {{ dialog.okText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: this.$dialog.confirmData,
    };
  },
  methods: {
    done() {
      this.dialog.done();
      this.cancel();
    },
    cancel() {
      this.$dialog.cancel();
    },
  },
};
</script>

<style scoped></style>
