<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="target-container d-flex full-height">
    <NavigationDrawer></NavigationDrawer>
    <div class="content full-width full-height ml-4">
      <div class="d-flex justify-space-between align-center content-title pa-4">
        <div class="text-xl font-weight-semibold">Danh sách mục tiêu</div>

        <v-icon color="black" class=""> mdi-information-outline </v-icon>
      </div>
      <v-divider class=""></v-divider>
      <v-row class="pa-4">
        <v-col cols="4">
          <div class="text-sm font-weight-semibold">Thông tin danh sách</div>
          <v-text-field
            class="nav-search-field border-radius-4 text-sm mt-2"
            placeholder="Tìm kiếm theo tên hoặc mã m  ục tiêu"
            append-icon="mdi-magnify"
            flat
            solo
            outlined
            dense
            hide-details
            clearable
          ></v-text-field>
          <div class="border-radius-8 white-bg neutral20-border mt-3 pa-4">
            <v-list class="pa-0 ma-0 py-4">
              <v-list-group class="pa-0 ma-0 mx-n4" :value="true" no-action>
                <template v-slot:activator>
                  <v-list-item class="text-sm font-weight-bold px-0">
                    <div class="success-section"></div>

                    <div
                      class="d-flex flex-column justify-center full-width ml-3"
                    >
                      <div class="d-flex">
                        <div
                          class="number-title d-flex justify-center align-center border-radius-4"
                        >
                          <div>1</div>
                        </div>
                        <div class="ml-2">Doanh thu 100 tỷ</div>
                      </div>
                      <div
                        class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                      >
                        <div>Hoàn thành</div>
                        <div>100%</div>
                      </div>
                      <v-progress-linear
                        value="100"
                        :height="5"
                        color="#1fce85"
                        rounded
                      ></v-progress-linear>
                    </div>
                  </v-list-item>
                </template>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="secondary-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>1.1</div>
                      </div>
                      <div class="ml-2">Doanh thu 70 tỷ</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Chưa ban hành</div>
                      <div>0%</div>
                    </div>
                    <v-progress-linear
                      value="100"
                      :height="5"
                      color="secondary"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="secondary-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>1.2</div>
                      </div>
                      <div class="ml-2">Doanh thu 30 tỷ</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Chưa ban hành</div>
                      <div>0%</div>
                    </div>
                    <v-progress-linear
                      value="100"
                      :height="5"
                      color="secondary"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pa-0 ma-0 py-4">
              <v-list-group class="pa-0 ma-0 mx-n4" :value="true" no-action>
                <template v-slot:activator>
                  <v-list-item class="text-sm font-weight-bold px-0">
                    <div class="error-section"></div>
                    <div
                      class="d-flex flex-column justify-center full-width ml-3"
                    >
                      <div class="d-flex">
                        <div
                          class="number-title d-flex justify-center align-center border-radius-4"
                        >
                          <div>2</div>
                        </div>
                        <div class="ml-2">Chuyển đổi số cấp độ 3</div>
                      </div>
                      <div
                        class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                      >
                        <div>Không hoàn thành</div>
                        <div>5%</div>
                      </div>
                      <v-progress-linear
                        value="5"
                        :height="5"
                        color="#D65959"
                        rounded
                      ></v-progress-linear>
                    </div>
                  </v-list-item>
                </template>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="warning-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>2.1</div>
                      </div>
                      <div class="ml-2">Chuyển đổi số phòng ban</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Tạm dừng</div>
                      <div>30%</div>
                    </div>
                    <v-progress-linear
                      value="30"
                      :height="5"
                      color="#EAE453"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="secondary-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>2.2</div>
                      </div>
                      <div class="ml-2">Trụ cột công nghệ</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Hủy bỏ</div>
                      <div>0%</div>
                    </div>
                    <v-progress-linear
                      value="100"
                      :height="5"
                      color="secondary"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="secondary-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>2.3</div>
                      </div>
                      <div class="ml-2">Trụ cột văn hóa và doanh nghiệp</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Hủy bỏ</div>
                      <div>0%</div>
                    </div>
                    <v-progress-linear
                      value="100"
                      :height="5"
                      color="secondary"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
                <v-list-item class="text-sm font-weight-bold mt-2 px-9">
                  <div class="primary-section"></div>
                  <div
                    class="d-flex flex-column justify-center full-width ml-3"
                  >
                    <div class="d-flex">
                      <div
                        class="number-title d-flex justify-center align-center border-radius-4"
                      >
                        <div>2.4</div>
                      </div>
                      <div class="ml-2">Chuyển đổi cấp độ 4</div>
                    </div>
                    <div
                      class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                    >
                      <div>Đang theo dõi</div>
                      <div>40%</div>
                    </div>
                    <v-progress-linear
                      value="100"
                      :height="5"
                      color="primary"
                      rounded
                    ></v-progress-linear>
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
            <v-divider></v-divider>

            <v-list class="pa-0 ma-0 py-4">
              <v-list-group class="pa-0 ma-0 mx-n4" :value="true" no-action>
                <template v-slot:activator>
                  <v-list-item class="text-sm font-weight-bold px-0">
                    <div class="success-section"></div>
                    <div
                      class="d-flex flex-column justify-center full-width ml-3"
                    >
                      <div class="d-flex">
                        <div
                          class="number-title d-flex justify-center align-center border-radius-4"
                        >
                          <div>3</div>
                        </div>
                        <div class="ml-2">Trụ cột văn hóa doanh nghiệp 4.0</div>
                      </div>
                      <div
                        class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                      >
                        <div>Hoàn thành</div>
                        <div>100%</div>
                      </div>
                      <v-progress-linear
                        value="100"
                        :height="5"
                        color="#1fce85"
                        rounded
                      ></v-progress-linear>
                    </div>
                  </v-list-item>
                </template>
              </v-list-group>
            </v-list>
            <v-divider></v-divider>

            <v-list class="pa-0 ma-0 py-4">
              <v-list-group class="pa-0 ma-0 mx-n4" :value="true" no-action>
                <template v-slot:activator>
                  <v-list-item class="text-sm font-weight-bold px-0">
                    <div class="success-section"></div>
                    <div
                      class="d-flex flex-column justify-center full-width ml-3"
                    >
                      <div class="d-flex">
                        <div
                          class="number-title d-flex justify-center align-center border-radius-4"
                        >
                          <div>4</div>
                        </div>
                        <div class="ml-2">Nâng cao chất lượng nhân sự</div>
                      </div>
                      <div
                        class="text-xm font-weight-medium mt-2 d-flex justify-space-between"
                      >
                        <div>Hoàn thành</div>
                        <div>100%</div>
                      </div>
                      <v-progress-linear
                        value="100"
                        :height="5"
                        color="#1fce85"
                        rounded
                      ></v-progress-linear>
                    </div>
                  </v-list-item>
                </template>
              </v-list-group>
            </v-list>
          </div>
          <v-pagination
            class="pa-0 mt-3"
            color="primary"
            :length="7"
            :total-visible="4"
            v-model="page"
          ></v-pagination>
        </v-col>
        <v-col cols="8">
          <div class="d-flex justify-space-between align-center">
            <div class="text-sm font-weight-semibold">Thống kê thông tin</div>
            <v-btn
              class="white-bg neutral20-border text-none text-btn border-radius-8 py-5"
              elevation="0"
              outlined
            >
              <v-icon small>mdi-open-in-new</v-icon>
              <div class="ml-1 font-weight-semibold">Kết xuất biểu mẫu</div>
            </v-btn>
          </div>
          <div
            class="border-radius-8 white-bg neutral20-border px-6 pt-6 pb-2 mt-3"
          >
            <pieChart
              :width="500"
              :height="500"
              :options="options"
              :index="1"
              :series="series1"
              :labels="labels"
            />
          </div>
          <div
            class="border-radius-8 white-bg neutral20-border px-6 pt-6 pb-2 mt-4"
          >
            <pieChart
              :width="470"
              :height="500"
              :options="options2"
              :index="1"
              :series="series2"
              :labels="labels2"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // NavigationDrawer: () => import("@/components/NavigationDrawer.vue"),
    NavigationDrawer: () => import("@/components/NavigationDrawerIso.vue"),
    pieChart: () => import("@/views/target/components/pie-chart.vue"),
  },
  data() {
    return {
      options: {
        stroke: {
          show: false,
        },
        colors: ["#1FCE85", "#2B78E4", "#EAE453", "#D65959", "#9DBEED"],
        chart: {
          type: "pie",
        },
        legend: {
          position: "left",
          horizontalAlign: "center",
          fontSize: "14px",
          fontWeight: 500,
          itemMargin: {
            horizontal: 10,
            vertical: 0,
          },
          markers: {
            width: 18,
            height: 18,
            radius: 0,
          },
        },
      },
      options2: {
        stroke: {
          show: false,
        },
        colors: ["#1FCE85", "#2B78E4", "#EAE453", "#9DBEED"],
        chart: {
          type: "pie",
        },
        legend: {
          position: "left",
          horizontalAlign: "center",
          fontSize: "14px",
          fontWeight: 500,
          itemMargin: {
            horizontal: 10,
            vertical: 0,
          },
          markers: {
            width: 18,
            height: 18,
            radius: 0,
          },
        },
      },
      series1: [20, 30, 40, 30, 60],
      labels: [
        "Hoàn thành",
        "Đang theo dõi",
        "Không hoàn thành",
        "Tạm dừng",
        "Huỷ bỏ",
      ],
      labels2: ["Đã duyệt", "Không duyệt", "Chờ duyệt", "Thiết lập"],
      series2: [20, 30, 40, 70],
      page: 1,
    };
  },
};
</script>

<style scoped>
.content {
  background-color: white;
}
.target-container {
  width: 100vw !important;
}
.content-title {
  max-width: 250px;
}
.number-title {
  width: 20px;
  height: 20px;
  background-color: var(--v-secondary-base) !important;
}
.success-section {
  width: 8px;
  height: 60px;
  background-color: #1fce85 !important;
}

.error-section {
  width: 8px;
  height: 60px;
  background-color: #d65959 !important;
}
.warning-section {
  width: 8px;
  height: 60px;
  background-color: #eae453 !important;
}
.secondary-section {
  width: 8px;
  height: 60px;
  background-color: var(--v-secondary-base) !important;
}
.primary-section {
  width: 8px;
  height: 60px;
  background-color: var(--v-primary-base) !important;
}
</style>
