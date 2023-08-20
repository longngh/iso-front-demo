/* eslint-disable vue/multi-word-component-names */
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import { markRaw } from "vue";
// Vue.config.productionTip = false;
import alert from "@/plugins/alert";
import loading from "@/plugins/loading";
import PluginHelper from "@/helpers/PluginHelper";
import utils from "@/plugins/utils";
import dialog from "@/plugins/dialog";
import { rules } from "@/plugins/rules";
import { vueFilterRegister } from "@/plugins/filter";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VueApexCharts from "vue-apexcharts";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
Vue.use(PiniaVuePlugin);
Vue.config.productionTip = false;
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(
  PluginHelper.create({
    $utils: utils,
    $rules: rules,
    $dialog: dialog,
    $alert: alert,
    $loading: loading,
    $baseUrl: process.env.VUE_APP_API_ENDPOINT,
  })
);
Vue.use(pinia);
vueFilterRegister();

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
