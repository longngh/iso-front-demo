<template>
  <v-app>
    <v-main>
      <PluginLoading />
      <PluginSnackbar />
      <PluginConfirmDialog />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    PluginLoading: () => import("@/components/plugin/PluginLoading.vue"),
    PluginSnackbar: () => import("@/components/plugin/PluginAlert.vue"),
    PluginConfirmDialog: () =>
      import("@/components/plugin/PluginConfirmDialog.vue"),
  },

  created() {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.table-img {
  width: 80px !important;
  height: 80px !important;
}

.row + .row {
  margin-top: 0px !important;
}
.search-field {
  max-width: 360px !important;
}
.items-per-page-field {
  max-width: 88px !important;
}
.max-item-field {
  max-width: 64px !important;
}

.white-bg {
  background: white !important;
}
.neutral20-border {
  border: 1px solid var(--v-neutral20-base) !important;
}

.v-application,
body {
  font-family: "Inter", sans-serif !important;
  font-weight: 400;
  color: var(--v-neutral100-base) !important;
}
.primary-bg {
  background: var(--v-primary-base) !important;
}
.white-bg {
  background: white !important;
}
.neutral30-border {
  border: 1px solid var(--v-neutral30-base) !important;
}
.font-inter {
  font-family: "Inter", sans-serif !important;
}
.border-radius-24 {
  border-radius: 24px !important;
}
.border-radius-16 {
  border-radius: 16px !important;
}
.border-radius-12 {
  border-radius: 12px !important;
}
.border-radius-8 {
  border-radius: 8px !important;
}
.border-radius-6 {
  border-radius: 6px !important;
}
.border-radius-4 {
  border-radius: 4px !important;
}
.gap-4 {
  gap: 4px;
}
.gap-8 {
  gap: 8px;
}
.gap-16 {
  gap: 16px;
}
.col-gap-36 {
  column-gap: 36px;
}
.col-gap-72 {
  column-gap: 72px;
}

.full-width {
  width: 100% !important;
}
.full-height {
  height: 100% !important;
}
.cursor-pointer {
  cursor: pointer !important;
}
.overflow-hidden {
  overflow: hidden;
}
.btn-default {
  background-color: var(--v-secondary-base) !important;
  width: 24px !important;
  height: 24px !important;
  border-radius: 4px;
}
.text-btn {
  font-style: normal;
  font-weight: 500 !important;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: normal !important;
}
.text-overline-1 {
  font-size: 10px !important;
  line-height: 12px !important;
}
.text-caption {
  font-size: 12px !important;
  line-height: 14px !important;
}
.text-xxs {
  font-size: 10px !important;
  line-height: 12px !important;
}
.text-xs {
  font-size: 12px !important;
  line-height: 14px !important;
}
.text-sm {
  font-size: 14px !important;
  line-height: 20px !important;
}
.text-md {
  font-size: 16px !important;
  line-height: 24px !important;
}
.text-lg {
  font-size: 18px !important;
  line-height: 24px !important;
}
.text-xl {
  font-size: 20px !important;
  line-height: 28px !important;
}
.text-dp-xs {
  font-size: 24px !important;
  line-height: 32px !important;
}
.text-dp-sm {
  font-size: 28px !important;
  line-height: 36px !important;
}
.text-dp-md {
  font-size: 36px !important;
  line-height: 44px !important;
  letter-spacing: -2% !important;
}
.text-dp-lg {
  font-size: 48px !important;
  line-height: 56px !important;
  letter-spacing: -2% !important;
}
.text-dp-xl {
  font-size: 60px !important;
  line-height: 64px !important;
  letter-spacing: -2% !important;
}
.text-dp-xxl {
  font-size: 72px !important;
  line-height: 80px !important;
  letter-spacing: -2% !important;
}
.font-weight-semibold {
  font-weight: 600;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 8px #1e1e20;
  background-color: transparent !important;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: transparent !important;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: 0 0 8px #1e1e20;
  background-color: var(--v-primary-base) !important;
}

//Vuetify component setting
.theme--light.v-list-item--active::before {
  opacity: 0 !important;
}
.v-carousel__controls__item .v-icon {
  opacity: 0 !important;
}
.v-carousel__controls__item {
  margin: 0 6px !important;
}
.v-carousel__controls__item.v-btn.v-btn--icon {
  background-color: var(--v-neutral30-base) !important;
  height: 8px; /* Height you want */
  width: 8px; /* Width you want */
  border-radius: 4px; /* Remove default border radius */
}

.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
  background-color: var(
    --v-primary60-base
  ) !important; /* Colour for active one */
}

.v-btn__content .v-icon {
  display: none; /* Removes the default icon */
}
.theme--light.v-list-item--active::before {
  opacity: 0 !important;
}
.theme--light.v-list-item--active::before {
  opacity: 0 !important;
}
.v-text-field--outlined fieldset {
  border-color: var(--v-neutral30-base) !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  color: var(--v-neutral70-base) !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  padding: 12px 12px !important;
}
.v-pagination__navigation,
.v-pagination__item {
  border: 1px solid var(--v-neutral30-base) !important;
  box-shadow: none !important;
  border-radius: 8px !important;
}
// .v-text-field--outlined fieldset {
//   border-color: var(--v-neutral30-base) !important;
// }
// .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
//   font-weight: 600 !important;
//   font-size: 14px !important;
//   line-height: 20px !important;
//   color: var(--v-neutral70-base) !important;
// }
// .v-data-table > .v-data-table__wrapper > table > tbody > tr:nth-of-type(even) {
//   background: var(--v-neutral10-base);
// }
// .theme--light.v-data-table
//   > .v-data-table__wrapper
//   > table
//   > tbody
//   > tr:not(:last-child)
//   > td:not(.v-data-table__mobile-row) {
//   border: none !important;
// }
.v-dialog {
  border-radius: 16px !important;
}
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  height: 100%;
}
.v-sheet.v-snack__wrapper {
  border-radius: 12px;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.v-input--dense > .v-input__control > .v-input__slot {
  margin-bottom: 0px !important;
}
.v-text-field__details,
.v-messages {
  min-height: 10px !important;
  min-width: 1px;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
.v-input--dense > .v-input__control > .v-input__slot {
  margin-bottom: 0px !important;
}
.v-text-field__details,
.v-messages {
  min-height: 10px !important;
  min-width: 1px;
}

.theme--light.v-select.v-input--is-disabled .v-select__selections,
.theme--light.v-input--is-disabled input,
.theme--light.v-input--is-disabled textarea {
  color: var(--v-neutral70-base) !important;
}

.v-text-field--outlined fieldset {
  border-color: var(--v-neutral30-base) !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 20px !important;
  color: var(--v-neutral70-base) !important;
}
/* .v-data-table > .v-data-table__wrapper > table > tbody > tr:nth-of-type(even) {
   background: var(--v-neutral10-base);
   .theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row) {
  border: none !important;
}
 }*/

.v-dialog {
  border-radius: 16px !important;
}

.theme--light.v-stepper .v-stepper__step--active .v-stepper__label {
  color: var(--v-primary-base) !important;
  text-shadow: none !important;
}

.theme--light.v-stepper .v-stepper__step--active .v-stepper__step__step {
  background-color: transparent !important;
  border: 1px solid var(--v-primary-base) !important;
  color: var(--v-primary-base) !important;
}

.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(
    .v-stepper__step--complete
  ):not(.v-stepper__step--error)
  .v-stepper__step__step {
  background-color: transparent !important;
  border: 1px solid rgba(0, 0, 0, 0.38) !important;
  color: rgba(0, 0, 0, 0.38) !important;
}

.theme--light.v-stepper .v-stepper__label {
  font-size: 12px !important;
  line-height: 18px !important;
}

.v-stepper--alt-labels .v-stepper__step {
  flex-grow: 1 !important;
}
.v-stepper--alt-labels .v-stepper__step__step {
  margin-bottom: 6px !important;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 52px !important;
}

//Animations
@keyframes fadeleft {
  0% {
    opacity: 0;
    transform: translatex(-100px);
  }
  100% {
    opacity: 1;
  }
}
.picture-inner {
  border: none !important;
}
.picture-preview {
  background-color: transparent !important;
  border: 1px solid var(--v-neutral30-base) !important;
  border-radius: 8px;
}
.category-icon {
  max-width: 24px !important;
  max-height: 24px !important;
}
.upload-container {
  position: relative;
}
.upload-text {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
}

.token-icon {
  font-size: 18px;
}
</style>
