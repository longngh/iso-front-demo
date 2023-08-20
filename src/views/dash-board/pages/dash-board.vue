<template>
  <div class="pa-10 dashboard-content mx-auto">
    <div class="text-dp-sm text-center mb-6">Danh sách các tính năng</div>
    <v-row>
      <v-col cols="12" md="3" sm="2" v-for="menu in menus" :key="menu.title">
        <v-card
          class="pa-6 border-radius-16 cursor-pointer full-height d-flex flex-column justify-center"
        >
          <div class="icon-bg d-flex justify-center align-center mx-auto">
            <v-img class="icon-bg__icon" :src="menu.iconPath" contain></v-img>
          </div>
          <div class="font-weight-semibold text-center mt-4">
            {{ menu.title }}
          </div>
          <div class="gray500--text flex-grow-1 mt-1 text-center text-sm">
            {{ menu.description }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { dashboardStore } from "../stores/dashboardStore";
import { mapStores } from "pinia";
export default {
  computed: {
    ...mapStores(dashboardStore),
  },
  data() {
    return {
      menus: [
        {
          title: "Quản lý tổ chức",
          description:
            "Sắp xếp, điều chỉnh sơ đồ bộ máy tổ chức của doanh nghiệp",
          iconPath: require("@/assets/icons/file-system-outlined.png"),
          routePath: "/",
        },
        {
          title: "Quản lý quá trình",
          description:
            "Quản lý quá trình vận hành toàn bộ hệ thống của doanh nghiệp",
          iconPath: require("@/assets/icons/network-file-system-outlined.png"),
          routePath: "/",
        },
        {
          title: "Quản lý chỉ số",
          description:
            "Quản lý các số liệu thống kê liên quan đến hệ thống và bộ máy của doanh nghiệp",
          iconPath: require("@/assets/icons/round-query-stats.png"),
          routePath: "/",
        },
        {
          title: "Quản lý nhân sự",
          description:
            "Quản lý các thông tin có liên quan đến nhân sự trong nội bộ bộ máy của doanh nghiệp",
          iconPath: require("@/assets/icons/people.png"),
          routePath: "/",
        },
        {
          title: "Tiêu chí",
          description:
            "Sắp xếp và điều chỉnh các tiêu chí nhằm thỏa mãn các điều kiện hoạt động của doanh nghiệp",
          iconPath: require("@/assets/icons/checkbox-list.png"),
          routePath: "/",
        },
        {
          title: "Chỉ số",
          description:
            "Nơi tổng hợp các số liệu thống kê liên quan đến hệ thống IDAS",
          iconPath: require("@/assets/icons/statistics.png"),
          routePath: "/",
        },
        {
          title: "Hệ thống",
          description:
            "Thiết lập, cài đặt các bộ phận trong hệ thống ứng dụng vận hành doanh nghiệp",
          iconPath: require("@/assets/icons/server-outline.png"),
          routePath: "/",
        },
        {
          title: "Sản phẩm",
          description:
            "Quản lý các thông tin liên quan đến sản phẩm mà doanh nghiệp sản xuất",
          iconPath: require("@/assets/icons/product.png"),
          routePath: "/",
        },
        {
          title: "Mục tiêu",
          description:
            "Quản lý các mục tiêu mà doanh nghiệp đề ra nhằm thỏa mãn các tiêu chuẩn hoạt động",
          iconPath: require("@/assets/icons/target-bold.png"),
          routePath: "/",
        },
        {
          title: "Rủi ro",
          description:
            "Quản lý các rủi ro nội hàm cũng như ngoại cảnh có ảnh hưởng đến việc vận hành của doanh nghiệp",
          iconPath: require("@/assets/icons/locking-computer.png"),
          routePath: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-content {
  max-width: 1400px;
}
.icon-bg {
  width: 64px;
  height: 64px;
  border-radius: 32px !important;
  background-color: var(--v-primary25-base);
}
.icon-bg__icon {
  width: 32px;
  height: 32px;
}
</style>
