import { defineStore } from "pinia";
// import { ref, computed } from "vue";
import { Auth } from "@/plugins/api.js";
import loading from "@/plugins/loading";
import alert from "@/plugins/alert";
import { User } from "@/plugins/api";

export const userStore = defineStore("user", {
  state: () => ({
    userData: {},
    jwt: "",
    rememberMe: false,
    username: "",
    password: "",
  }),
  getters: {
    isConnected() {
      return !!this.userData && !!this.jwt;
    },
    // isMaintainer() {
    //   return this.role && this.role.type == "maintainer";
    // },
    // isPartner() {
    //   return this.role && this.role.type == "partner";
    // },
  },
  actions: {
    // changePartnerAvatar(image) {
    //   if (!image) return;
    //   this.inputAvatar = image;
    // },
    async signIn() {
      try {
        loading.show();
        const res = await Auth.signIn({
          identifier: this.username,
          password: this.password,
        });
        if (!res) {
          alert.error(`Đăng nhập thất bại!`);
          return;
        }
        const userInfo = res.data.user;
        const jwt = res.data.jwt;
        if (!jwt) {
          alert.error(`Đăng nhập thất bại!`);
          return;
        }
        alert.success("Đăng nhập thành công!");
        this.jwt = jwt;
        this.userData = userInfo;
        this.userSignUpData = userInfo;
        this.role = this.userData.role;
        if (!this.rememberMe) {
          this.password = "";
        }
        this.router.push("/dashboard");
      } catch (error) {
        console.error(`Error: ${error}`);
        alert.error(error);
      } finally {
        loading.hide();
      }
    },
    async signUp() {
      try {
        loading.show();
        const res = await Auth.signUp({
          ...this.userSignUpData,
          username: this.userSignUpData.email,
          address: "",
          name: "",
        });
        if (!res) {
          alert.error(`Đăng ký thất bại!`);
          return;
        }
        if (!this.rememberMe) {
          this.password = "";
        }
        alert.success("Đăng ký thành công!");
        this.router.push("/");
      } catch (error) {
        console.error(`Error: ${error}`);
        alert.error(error);
      } finally {
        loading.hide();
      }
    },
    logout() {
      this.jwt = "";
      this.userData = {};
      this.role = {};
    },
    // async updateAccountSetting() {
    //   if (this.file) {
    //     try {
    //       loading.show();
    //       const formData = new FormData();
    //       formData.append("files", this.file);
    //       console.log("callapi", formData);
    //       const filedata = await User.uploadFile(formData);
    //       this.avatarUrl = filedata.data.map((index) => index.url);
    //       if (!this.avatarUrl) {
    //         alert.error(`Error occurred Upload File! Please try again later!`);
    //       } else {
    //         const res = await User.updateUserInfo(
    //           {
    //             ...this.userSignUpData,
    //             avatar: this.avatarUrl[0],
    //           },
    //           this.userData.id
    //         );
    //         if (!res) {
    //           alert.error(`Error occurred Update! Please try again later!`);
    //           return;
    //         }
    //         this.userData = res.data;
    //         this.avatar = res.data.avatarUrl;
    //         alert.success("Update successfully!");
    //       }
    //     } catch (error) {
    //       console.error(`Error: ${error}`);
    //       alert.error(error);
    //     } finally {
    //       loading.hide();
    //     }
    //   }
    // },
    async changePassword(currentPassword, newPassword, confirmPassword) {
      try {
        loading.show();
        await User.changePassword(currentPassword, newPassword, confirmPassword);
        alert.success("Change password successfully!");
        this.changePasswordDialog = false;
      } catch (error) {
        console.log("error", error);
        alert.error("Error occurred!", error.message);
      } finally {
        loading.hide();
      }
    },
  },
  persist: [
    {
      paths: ["password", "rememberMe", "username", "userData", "jwt"],
      storage: localStorage,
    },
  ],
});
/* eslint-enable */
