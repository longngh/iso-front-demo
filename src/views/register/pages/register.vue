<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-row class="login-container">
    <v-col class="d-flex flex-column justify-center login-container" cols="6">
      <v-card flat class="mx-auto form">
        <v-form
          ref="form"
          lazy-validation
          class="full-width d-flex flex-column align-center justify-center"
        >
          <div class="d-flex" @click="goToHome()">
            <!-- <div class="mx-auto logo-img">
              <v-img :src="require('@/assets/quochuy.png')" />
            </div> -->

            <div
              class="font-weight-bold green100--text text-xl text-center text-uppercase mt-4 mb-2"
            >
              cổng thông tin giới thiệu sản phẩm và truy xuất nguồn gốc hoa, cây
              cảnh tỉnh bến tre
            </div>
          </div>
          <div class="d-flex flex-column full-width form-input">
            <div class="text-md d-flex">
              <v-icon color="black"> mdi-arrow-left-thin </v-icon>
              <router-link
                to="/login"
                class="text-decoration-none font-weight-bold ml-2 black--text"
              >
                <div class="text-none nav-link">Quay lại</div>
              </router-link>
            </div>
            <div class="mt-2">
              <div class="text-dp-md font-weight-bold">Đăng ký</div>
              <div class="text-md mt-2">
                Xin chào! Hãy nhập thông tin của đồng chí.
              </div>
            </div>
            <div class="text-sm neutral70--text font-weight-bold mt-6">
              Tài Khoản
            </div>
            <v-text-field
              height="36px"
              type="text"
              v-model="userStore.userSignUpData.email"
              :rules="rules.checkIdentifier"
              class="pa-0 mt-2"
              placeholder="Nhập tên tài khoản"
              outlined
              dense
            />
            <div class="text-sm neutral70--text font-weight-bold mt-2">
              Số điện thoại
            </div>
            <v-text-field
              height="36px"
              type="text"
              v-model="userStore.userSignUpData.phoneNumber"
              :rules="rules.checkIdentifier"
              class="pa-0 mt-2"
              placeholder="Nhập số điện thoại"
              outlined
              dense
            />
            <div class="text-sm neutral70--text font-weight-bold mt-2">
              Mật Khẩu
            </div>
            <v-text-field
              height="36px"
              :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isShowPass ? 'text' : 'password'"
              :rules="rules.password"
              v-model="userStore.userSignUpData.password"
              @click:append="isShowPass = !isShowPass"
              class="pa-0 mt-2"
              outlined
              placeholder="Nhập mật khẩu"
              dense
            />
            <div class="text-sm neutral70--text font-weight-bold mt-2">
              Nhập lại mật khẩu
            </div>
            <v-text-field
              height="36px"
              :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isShowPass ? 'text' : 'password'"
              :rules="[passwordConfirmationRule]"
              v-model="userStore.cfpassword"
              @click:append="isShowPass = !isShowPass"
              class="pa-0 mt-2"
              outlined
              placeholder="Nhập lại mật khẩu"
              dense
            />
          </div>

          <v-btn
            class="mt-7 full-width border-radius-12"
            color="primary"
            height="56px"
            @click="submitForm"
            depressed
            ><span class="black--text text-none text-btn"
              >Tạo tài khoản</span
            ></v-btn
          >
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="6" class="login-container">
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
    </v-col>
  </v-row>
</template>

<script>
import { rules } from "@/plugins/rules";
import { userStore } from "@/stores/userStore";
import { mapStores } from "pinia";
export default {
  computed: {
    ...mapStores(userStore),
    passwordConfirmationRule() {
      return () =>
        this.userStore.userSignUpData.password === this.userStore.cfpassword ||
        "Password must match";
    },
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
        this.userStore.signUp();
      }
    },
    goToHome() {
      window.open("https://trungtamcaycanh.capylabs.io/");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
}
.logo-img {
  width: 64px;
  height: 64px;
}
.form {
  width: 400px;
}
.form-input {
  margin-top: 80px;
}
.remember-me {
  height: 25px;
}
.banner-img {
  max-height: 100vh !important;
}
</style>
