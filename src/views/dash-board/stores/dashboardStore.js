import { defineStore } from "pinia";
import loading from "@/plugins/loading";
import alert from "@/plugins/alert";
import { Common } from "@/plugins/api";
import { get } from "lodash";

export const dashboardStore = defineStore("dashboard", {
  state: () => ({
    dashboard: {},
  }),
  getters: {},
  actions: {
    async fetchStatistics() {
      try {
        loading.show();
        const res = await Common.fetchStatistics();
        if (!res) {
          alert.error(
            "Error occurred when fetching news!",
            "Please try again later!"
          );
          return;
        }
        const dashboard = get(res, "data", {});
        if (!dashboard && dashboard.length == 0) return;
        this.dashboard = dashboard;
      } catch (error) {
        alert.error("Error occurred!", error.message);
      } finally {
        loading.hide();
      }
    },
  },
});
/* eslint-enable */
