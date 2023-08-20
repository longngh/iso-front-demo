import axios from "axios";
import utils from "@/plugins/utils";
import { userStore } from "@/stores/userStore";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
// axios.defaults.baseURL = "https://neobank-dev-api.capylabs.io/api/";

const USER_API = "/users/";
const POST_API = "/posts/";
const PRODUCT_API = "/products/";
const SEED_API = "/seedlings/";
const SUPPLY_CATEGORY_API = "/supply-categories/";
const SUPPLY_API = "/supplies/";
const PRODUCT_CATEGORY_API = "/product-categories/";
const SEED_CATEGORY_API = "/seedling-categories/";
const FAQ_CATEGORY_API = "/faq-categories/";
const FAQ_API = "/faqs/";
const DOCUMENT_CATEGORY_API = "/document-categories/";
const DOCUMENT_API = "/documents/";
const ARTISAN_CATEGORY_API = "/artisan-categories/";
const ARTISAN_API = "/artisans/";
const AREA_CATEGORY_API = "/area-categories/";
const AREA_API = "/areas/";
const COOPERATIVE_CATEGORY_API = "/cooperative-categories/";
const COOPERATIVE_API = "/cooperatives/";
const AGENCY_CATEGORY_API = "/store-categories/";
const AGENCY_API = "/stores/";
const CONTACT_API = "/contacts/";

const APIHelper = (api) => ({
  search: (params, option) =>
    axios.get(api, { params: utils.filterObject(params) }, option),
  count: (params, option) =>
    axios.get(api + "count", { params: utils.filterObject(params) }, option),
  fetch: (params, option) =>
    axios.get(api, { params: utils.filterObject(params) }, option),
  fetchOne: (id, option) => axios.get(api + id, option),
  create: (params, options) =>
    axios.post(api, utils.filterObject(params), {
      ...options,
      headers: {
        Authorization: "Bearer " + userStore().jwt,
      },
    }),
  update: (id, params, option) =>
    axios.put(api + id, utils.filterObject(params), option),
  remove: (id, option) => axios.delete(api + id, option),
});
export const APIRespository = APIHelper;
export const Auth = {
  signIn: (signInData) => axios.post("auth/local", signInData),
  signUp: (signUpData) => axios.post("auth/local/register", signUpData),
  changePassword: (signUpData) =>
    axios.post("auth/change-password", signUpData),
};
export const User = {
  ...APIHelper(USER_API),
  changePassword: (currentPassword, newPassword, confirmNewPassword) => {
    const user = userStore();
    if (!user.isConnected) return;
    return axios.post(
      "auth/change-password",
      {
        currentPassword: currentPassword,
        password: newPassword,
        passwordConfirmation: confirmNewPassword,
      },
      {
        headers: {
          Authorization: "Bearer " + user.jwt,
        },
      }
    );
  },
  updateUserInfo: (model, id) => axios.put(`users/${id}`, model),
  updateUserEmail: (email, password) =>
    axios.post("users/edit-email", {
      newEmail: email,
      password,
    }),
  uploadFile: (file) => axios.post("upload", file),
};

export const Common = {
  uploadFile: (file) =>
    axios.post("upload", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  fetchStatistics: () => {
    const user = userStore();
    return axios.get("statistics/dashboard", {
      headers: {
        Authorization: "Bearer " + user.jwt,
      },
    });
  },
};
export const Category = {
  fetchCategory: () => {
    const user = userStore();
    if (!user.isConnected) return;
    return axios.get("post-categories", {
      headers: {
        Authorization: "Bearer " + user.jwt,
      },
    });
  },
};
export const Post = {
  ...APIHelper(POST_API),
  createPost: (data) => {
    const user = userStore();
    return axios.post("posts", data, {
      headers: {
        Authorization: "Bearer " + user.jwt,
      },
    });
  },
};

export const Product = {
  ...APIHelper(PRODUCT_API),
};
export const ProductCategory = {
  ...APIHelper(PRODUCT_CATEGORY_API),
};
export const Seed = {
  ...APIHelper(SEED_API),
};
export const SeedCategory = {
  ...APIHelper(SEED_CATEGORY_API),
};
export const Supply = {
  ...APIHelper(SUPPLY_API),
};
export const SupplyCategory = {
  ...APIHelper(SUPPLY_CATEGORY_API),
};

export const FAQ = {
  ...APIHelper(FAQ_API),
};
export const FAQCategory = {
  ...APIHelper(FAQ_CATEGORY_API),
};
export const Artisan = {
  ...APIHelper(ARTISAN_API),
};
export const ArtisanCategory = {
  ...APIHelper(ARTISAN_CATEGORY_API),
};
export const Agency = {
  ...APIHelper(AGENCY_API),
};
export const AgencyCategory = {
  ...APIHelper(AGENCY_CATEGORY_API),
};
export const Area = {
  ...APIHelper(AREA_API),
};
export const AreaCategory = {
  ...APIHelper(AREA_CATEGORY_API),
};
export const Cooperative = {
  ...APIHelper(COOPERATIVE_API),
};
export const CooperativeCategory = {
  ...APIHelper(COOPERATIVE_CATEGORY_API),
};
export const Contact = {
  ...APIHelper(CONTACT_API),
};
export const Document = {
  ...APIHelper(DOCUMENT_API),
};
export const DocumentCategory = {
  ...APIHelper(DOCUMENT_CATEGORY_API),
};
