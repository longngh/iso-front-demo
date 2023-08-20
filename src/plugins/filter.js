import moment from "moment";
import Vue from "vue";
import { get, isNumber, isEmpty } from "lodash";

export const vueFilterRegister = () => {
  Vue.filter("date", (isoStr, format) =>
    isoStr ? moment(isoStr).format(format) : ""
  );
  Vue.filter("datetime", (isoStr, format = "lll") =>
    isoStr ? moment(isoStr).format(format) : ""
  );
  Vue.filter("ddmmyyyy", (isoStr) =>
    isoStr ? moment(isoStr).format("DD/MM/YYYY") : ""
  );
  Vue.filter("ddmmyyyyhhmmss", (isoStr) =>
    isoStr ? moment(isoStr).format("DD/MM/YYYY HH:mm:ss") : ""
  );
  Vue.filter("normalizeTimeDuration", (timestamp) => {
    if (!timestamp) return "TBA";
    const duration = timestamp - Date.now();
    const arr = ["year", "month", "week", "minute", "second"];
    for (const i of arr) {
      // const unitTime = i as moment.unitOfTime.Base;
      const unitTime = i;
      const normalizeDuration = Math.trunc(
        moment.duration(duration).as(unitTime)
      );
      if (normalizeDuration != 0) {
        const res = moment.duration(normalizeDuration, unitTime).humanize();
        return duration >= 0 ? res : `${res} ago`;
      }
    }
    return "a few seconds ago";
  });

  // const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  // function abbreviateNumber(number) {
  //   // what tier? (determines SI symbol)
  //   const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  //   // if zero, we don't need a suffix
  //   if (tier == 0) return round(number, 1);

  //   // get suffix and determine scale
  //   const suffix = SI_SYMBOL[tier];
  //   const scale = Math.pow(10, tier * 3);

  //   // scale the number
  //   const scaled = number / scale;

  //   // format number and add suffix
  //   return `${round(scaled, 1)}${suffix}`;
  // }

  Vue.filter("_get", (any, path, defaultValue = "") => {
    return get(any, path, defaultValue);
  });
  Vue.filter("_empty", (any) => {
    return !isNumber(any) && (!any || isEmpty(any));
  });

  Vue.filter("usd", (number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    if (+number === 0) return `$${number}`;
    if (!isNaN(+number) && +number !== 0) return formatter.format(+number);
    return number;
  });

  Vue.filter("formatNumber", (number, maximumFractionDigits = 5) => {
    const nf = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: maximumFractionDigits,
    });
    return nf.format(number);
  });
  Vue.filter("twoDigits", (value) => {
    if (value < 0) {
      return "00";
    }
    if (value.toString().length <= 1) {
      return `0${value}`;
    }
    return value;
  });
};
