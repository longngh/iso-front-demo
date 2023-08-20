<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-row class="login-container" no-gutters>
    <v-col class="d-flex flex-column justify-center login-container" cols="6">
      <v-card flat class="mx-auto" width="400px">
        <v-form
          ref="form"
          lazy-validation
          class="full-width d-flex flex-column align-center justify-center"
        >
          <div class="d-flex flex-column full-width form-input">
            <div>
              <div class="text-dp-md font-weight-medium text-center">
                Đăng nhập
              </div>
            </div>
            <div class="text-sm neutral70--text font-weight-bold mt-6">
              Tài Khoản
            </div>
            <v-text-field
              v-model="userStore.username"
              height="36px"
              type="text"
              class="pa-0 mt-2 border-radius-6"
              placeholder="Nhập tên tài khoản"
              :rules="rules.checkIdentifier"
              outlined
              dense
            />
            <div class="text-sm neutral70--text font-weight-bold mt-2">
              Mật Khẩu
            </div>
            <v-text-field
              v-model="userStore.password"
              height="36px"
              class="pa-0 mt-2 border-radius-6"
              placeholder="Nhập mật khẩu"
              :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isShowPass ? 'text' : 'password'"
              :rules="rules.password"
              @click:append="isShowPass = !isShowPass"
              outlined
              dense
            />
          </div>
          <div
            class="d-flex align-center justify-space-between full-width text-sm"
          >
            <v-checkbox
              v-model="userStore.rememberMe"
              class="mt-0"
              dense
              hide-details
            >
              <template v-slot:label>
                <div class="text-sm">Giữ tài khoản đăng nhập</div>
              </template>
            </v-checkbox>
            <v-btn class="text-none text-btn text-sm mt-1" color="primary" text
              >Quên mật khẩu?</v-btn
            >
          </div>

          <v-btn
            class="mt-6 full-width border-radius-6"
            color="primary"
            height="40px"
            @click="submitForm"
            depressed
            ><span class="text-none text-btn">Đăng nhập</span></v-btn
          >
          <div class="mt-6 text-sm d-flex">
            <span>Chưa có tài khoản?</span>
            <router-link
              to="/register"
              class="text-decoration-none ml-2 primary--text"
            >
              <div class="text-none nav-link">Đăng ký</div>
            </router-link>
          </div>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="6" class="login-right-section">
      <v-img
        height="100vh"
        :src="require('@/assets/images/login-bg.png')"
        alt="login-bg.png"
        cover
      />
    </v-col>
    <!-- <v-col cols="6" class="login-container">
      <v-carousel
        height="100vh"
        :interval="5000"
        show-arrows-on-hover
        hide-delimiter-background
        cycle
      >
        <v-carousel-item
          v-for="(url, i) in imageUrls"
          class="banner-img"
          :key="i"
          :src="url"
          cover
        >
        </v-carousel-item>
      </v-carousel>
    </v-col> -->
  </v-row>
</template>

<script>
import { rules } from "@/plugins/rules";
import { userStore } from "@/stores/userStore";
import { mapStores } from "pinia";

export default {
  computed: {
    ...mapStores(userStore),
  },
  data() {
    return {
      rules: rules,
      isShow: true,
      isShowPass: false,
    };
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: "vn",
        name: url,
      });
    },
    change() {
      this.userStore.pageIndex = 3;
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        this.userStore.signIn();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
