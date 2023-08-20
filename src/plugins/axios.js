import axios from "axios";
import qs from "qs";
import loading from "./loading";
import alert from "@/plugins/alert";
import _ from "lodash";
const CONNECTION_FAIL_MSG = "Connection fail";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

export const axiosPlugin = (store) => {
  let jwtTokenCached;
  // eslint-disable-next-line no-unused-vars

  store.watch(
    (state) => state.auth.jwt,
    (newValue) => {
      jwtTokenCached = newValue;
    },
    { immediate: true }
  );

  axios.interceptors.request.use(
    (config) => {
      if (jwtTokenCached) {
        const header = config.headers || {};
        Object.assign(header, {
          ...header,
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        });
        config.headers = {
          ...header,
          Authorization: `Bearer ${jwtTokenCached}`,
        };

        // if (departmentId && !config.url.includes('department=')) {
        //   switch (config.method) {
        //     case 'post':
        //     case 'put':
        //     case 'patch':
        //       if (!config.data) {
        //         config.data = { department: departmentId }
        //       } else if (!config.data.department) {
        //         config.data['department'] = departmentId
        //       }
        //       break
        //     default:
        //       if (!config.params) {
        //         config.params = { department: departmentId }
        //       } else if (!config.params.department) {
        //         config.params['department'] = departmentId
        //       }
        //       break
        //   }
        // }
      }

      if (config.requestId) {
        store.dispatch("rest/startRequest", config.requestId);
      }

      config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: "repeat" });

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      if (res.config && res.config.requestId) {
        store.dispatch("rest/endRequest", res.config.requestId);
      }
      if (res.config && res.config.successMessage) {
        alert.success(res.config.successMessage);
      }
      loading.hide();
      return res.data;
    },
    (err) => {
      if (err.config && err.config.requestId) {
        store.dispatch("rest/endRequest", err.config.requestId);
      }
      loading.hide();
      if (err.response) {
        const {
          response: {
            data: { message },
            status,
          },
        } = err;
        if (status === 401) {
          store.dispatch("auth/signOut");
          return;
        }
        let errMsg;
        if (err.config && err.config.errorMessage) {
          const errorMessage = err.config.errorMessage;
          errMsg = errorMessage;
          if (typeof errorMessage === "object") {
            errMsg = errorMessage[`status_${status}`] || errorMessage.default;
          }
        } else if (message) {
          if (Array.isArray(message)) {
            errMsg = _.first(message);
            if (errMsg) errMsg = errMsg.messages;
            if (errMsg) errMsg = _.first(errMsg);
            if (errMsg) errMsg = errMsg.message;
          } else {
            errMsg = message;
          }
        }

        if (errMsg) alert.error(errMsg);
        throw errMsg;
      } else {
        throw CONNECTION_FAIL_MSG;
      }
    }
  );
};

export default axios;
