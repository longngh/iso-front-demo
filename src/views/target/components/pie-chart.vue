<template>
  <div>
    <div class="d-flex justify-center align-center mt-2">
      <apexchart
        :width="width"
        :height="height"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { userStore } from "@/stores/userStore";
import VueApexCharts from "vue-apexcharts";

export default {
  props: {
    options: Object,
    index: Number,
    width: Number,
    height: Number,
    series: Array,
    labels: Array,
  },
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {};
  },
  computed: {
    ...mapStores(userStore),
    chartOptions() {
      return {
        ...this.options,
        labels: this.labels,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-card {
  height: max-content;
}
</style>
