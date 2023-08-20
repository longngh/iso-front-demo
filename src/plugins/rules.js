import moment from "moment";
export const rules = {
  required: (v) => (!!v && (typeof v !== "string" || !!v.trim())) || v === 0 || "This is required field",
  checkIdentifier: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) || v === 0 || "Please input your email or your phone",
    (v) =>
      (v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v.trim()
        )) ||
      (v.length >= 10 && /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/gi.test(v)) ||
      !v ||
      "Email (or phone number) is not valid",
  ],
  email: [
    (v) => (!!v && (typeof v !== "string" || !!v.trim())) || v === 0 || "Please input Email",
    (v) =>
      (v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v.trim()
        )) ||
      !v ||
      "Email is not valid",
  ],
  password: [
    (v) => (!!v && (typeof v !== "string" || !!v.trim())) || v === 0 || "Please input Password",
    (v) => (v && v.length >= 8) || !v || "Your password must be at least 8 characters",
    (v) =>
      !v ||
      /^(?=.*[a-z])(?=.*\d)(?=.)[A-Za-z\d@$!%*?#]{8,32}$/.test(v) ||
      "Password allow only letter, numbers and special characters (@$!%*?#)",
    (v) => (v && v.length <= 32) || !v || "Your password must be lower than or equal to 32 characters",
  ],
  phone: [
    (v) => (!!v && (typeof v !== "string" || !!v.trim())) || v === 0 || "Please input Phone number",
    (v) =>
      !v ||
      (v.length >= 10 && /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/gi.test(v)) ||
      "Phone is not valid",
  ],
  maxLength: (length) => (v) => (v && v.length <= length) || !v || `Độ dài tối đa ${length} ký tự`,
  minLength: (length) => (v) => (v && v.length >= length) || !v || `Độ dài tối thiểu ${length} ký tự`,
  max: (number) => (v) => v <= number || `Must be lower than or equal to ${number}`,
  min: (number) => (v) => v >= number || `Must be greater than or equal to ${number}`,
  url: (v) =>
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
      v
    ) ||
    !v ||
    "Đường dẫn không hợp lệ",
  alphabet: (v) =>
    !v ||
    /^[a-z ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+$/gi.test(v.trim()) ||
    "Contain a-z only",
  normal: (v) =>
    !v ||
    /^[a-z0-9 ._ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]+$/gi.test(v.trim()) ||
    "Chứa ký tự không hợp lệ",
  equal: (target, msg) => (v) => !v || target === v || msg || `Must be equal to ${target}`,
  nospace: (v) => !v || !/ /.test(v.trim()) || "Không được chứa dấu cách",
  notEmpty: (v) => !Array.isArray(v) || !!v.length || "Required",
  otp: (v) => (v && /^(\d{6})$/.test(v.trim())) || "Mã OTP bao gồm 6 chữ số",
  cccd: (v) => !v || /^(\d{9}|\d{12})$/.test(v.trim()) || "Sai định dạng số CMND / Thẻ CCCD",
  activeCode: (v) => (v && /^(\d{8})$/.test(v.trim())) || "Mã kích hoạt gồm 8 chữ số",
  dob: (v) =>
    !v ||
    (moment(v, "DD/MM/YYYY").isValid() && moment(v, "DD/MM/YYYY").isBefore(new Date())) ||
    "Ngày tháng năm sinh không hợp lệ",
  date: (v) => !v || moment(v, "DD/MM/YYYY").isValid() || "Ngày không hợp lệ",
  mark: (v) => !v || (parseFloat(v) >= 0.25 && parseFloat(v) <= 10) || "Điểm không hợp lệ",
  checkbox: (v) => v || "",
  priorityMark: (v) => !v || (parseFloat(v) >= 0 && parseFloat(v) <= 3) || "Điểm cộng không hợp lệ",
  number: (v) => !v || /^\d+$/.test(v) || "Chỉ bao gồm các chữ số",
};

export const appRules = {};
