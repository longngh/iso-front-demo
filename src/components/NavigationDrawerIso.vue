<template>
  <v-navigation-drawer class="pa-0" width="370px" permanent>
    <div class="d-flex flex-column full-height overflow-hidden">
      <div class="d-flex flex-column justify-center pa-4 gap-8">
        <div class="d-flex justify-space-between align-center">
          <div class="text-sm font-weight-semibold">
            Tìm kiếm thông tin mục tiêu
          </div>

          <v-icon color="black" class=""> mdi-information-outline </v-icon>
        </div>
        <div>
          <v-text-field
            class="nav-search-field border-radius-4 text-sm"
            placeholder="Tìm kiếm theo từ khóa"
            append-icon="mdi-magnify"
            @click:append="goToSearch"
            flat
            solo
            outlined
            dense
            hide-details
            clearable
          ></v-text-field>
        </div>
        <div class="d-flex justify-end gap-8">
          <v-btn
            class="white-bg neutral20-border text-none text-btn border-radius-4 py-2"
            elevation="0"
          >
            Đặt lại
          </v-btn>
          <v-btn
            class="white-bg neutral20-border text-none text-btn border-radius-4 py-2"
            elevation="0"
            color="primary"
            depressed
          >
            Tìm kiếm</v-btn
          >
        </div>
      </div>

      <v-divider></v-divider>

      <div class="py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Tiêu chuẩn quản lý</v-list-item
              >
            </template>
            <!-- <v-select
              class="border-radius-8 items-per-page-field"
              flat
              solo
              dense
              hide-details
            ></v-select> -->
            <v-list-item class="border-radius-8 px-4 my-n5 text-sm"
              >ISO 9001
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>

      <v-divider></v-divider>
      <div class="py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Tình trạng mục tiêu</v-list-item
              >
            </template>
            <v-list-item
              v-for="(title, i) in admins"
              :key="i"
              class="border-radius-8 px-4 my-n5"
            >
              <v-checkbox
                :label="title"
                :value="i"
                class="text-sm font-weight-medium"
              >
              </v-checkbox>
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <v-divider></v-divider>
      <div class="py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Tình trạng thông tin</v-list-item
              >
            </template>
            <v-list-item
              v-for="(title, i) in admins1"
              :key="i"
              class="border-radius-8 px-4 my-n5"
            >
              <v-checkbox
                :label="title"
                :value="i"
                class="text-sm font-weight-medium"
              >
              </v-checkbox>
            </v-list-item>
          </v-list-group>
          <!-- <v-list-group
            class="border-radius-8 mt-2 mx-n2"
            :value="true"
            prepend-icon="mdi-cog-outline"
            no-action
            active-class="active-item"
          >
            <template v-slot:activator>
              <v-list-item class="mx-n6 text-md font-weight-medium"
                >Cấu hình trang chủ</v-list-item
              >
            </template>

            <v-list-item
              v-for="([title, url], i) in admins"
              :key="i"
              link
              class="border-radius-8 mx-4 px-4"
              active-class="active-item"
              :to="url"
            >
              <v-list-item class="text-md font-weight-medium">{{
                title
              }}</v-list-item>
            </v-list-item>
          </v-list-group> -->
        </v-list>
      </div>
      <v-divider></v-divider>

      <div class="align-center py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Tình trạng thực hiện</v-list-item
              >
            </template>
          </v-list-group>
        </v-list>
      </div>
      <v-divider></v-divider>

      <div class="align-center py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Tổ chức liên quan</v-list-item
              >
            </template>
            <v-list-item class="border-radius-8 px-4 my-n5 text-sm"
              >-- Lựa chọn tổ chức
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <v-divider></v-divider>

      <div class="align-center py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Nhóm mục tiêu</v-list-item
              >
            </template>
            <v-list-item class="border-radius-8 px-4 my-n5 text-sm"
              >-- Lựa chọn nhóm mục tiêu
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <v-divider></v-divider>

      <div class="align-center py-4 px-4">
        <v-list class="py-0">
          <v-list-group
            class="border-radius-8 mx-n4 mt-n4"
            :value="true"
            no-action
          >
            <template v-slot:activator>
              <v-list-item class="text-sm font-weight-bold px-0"
                >Cá nhân liên quan</v-list-item
              >
            </template>
            <v-list-item class="border-radius-8 px-4 my-n5 text-sm"
              >-- Lựa chọn cá nhân
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <v-spacer class="pt-8"></v-spacer>
      <v-divider class="pb-3"></v-divider>
      <div class="px-4 pb-5 mx-auto">
        <div class="text-sm mt-2 mx-auto">Cập nhật lúc 08:00 - 10/5/2023</div>
        <div class="text-xs neutral70--text mt-2 mx-auto">
          © iDAS - all rights reserved
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapStores } from "pinia";
import { userStore } from "@/stores/userStore";
import { get } from "lodash";
export default {
  computed: {
    ...mapStores(userStore),
    version() {
      return get(process.env, "VUE_APP_API_VERSION", "1.0.0");
    },
    environment() {
      return get(process.env, "VUE_APP_ENV", "Development");
    },
  },
  methods: {
    onLogoutClicked() {
      this.userStore.logout();
      this.$router.push("/login");
    },
  },
  data() {
    return {
      admins: [
        "Hoàn thành",
        "Đang theo dõi",
        "Không hoàn thành",
        "Tạm dừng",
        "Hủy bỏ",
      ],
      admins1: ["Đã duyệt", "Không duyệt", "Chờ duyệt", "Thiết lập"],
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 36px;
  height: 36px;
}
.logo-img {
  width: 50px;
  height: 50px;
}

.active-item {
}
.nav-search-field {
}
</style>
