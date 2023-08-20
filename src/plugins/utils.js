/* eslint-disable */
import moment from "moment";
import { get, last } from "lodash";
// import { parse } from "json2csv";
var ChuSo = [" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín "];
var Tien = ["", " nghìn", " triệu", " tỷ", " nghìn tỷ", " triệu tỷ"];
function DocSo3ChuSo(baso) {
  var tram;
  var chuc;
  var donvi;
  var KetQua = "";
  tram = parseInt(baso / 100);
  chuc = parseInt((baso % 100) / 10);
  donvi = baso % 10;
  if (tram === 0 && chuc === 0 && donvi === 0) return "";
  if (tram !== 0) {
    KetQua += ChuSo[tram] + " trăm ";
    if (chuc === 0 && donvi !== 0) KetQua += " linh ";
  }
  if (chuc !== 0 && chuc !== 1) {
    KetQua += ChuSo[chuc] + " mươi";
    if (chuc === 0 && donvi !== 0) KetQua = KetQua + " linh ";
  }
  if (chuc === 1) KetQua += " mười ";
  switch (donvi) {
    case 1:
      if (chuc !== 0 && chuc !== 1) {
        KetQua += " mốt ";
      } else {
        KetQua += ChuSo[donvi];
      }
      break;
    case 5:
      if (chuc === 0) {
        KetQua += ChuSo[donvi];
      } else {
        KetQua += " lăm ";
      }
      break;
    default:
      if (donvi !== 0) {
        KetQua += ChuSo[donvi];
      }
      break;
  }
  return KetQua;
}
const _deepClone = (source, target) => {
  for (let key in source) {
    if (!source.hasOwnProperty(key)) continue;
    if (!source[key] || typeof source[key] !== "object") {
      target[key] = source[key];
    } else {
      target[key] = Array.isArray(source[key]) ? [] : {};
      _deepClone(source[key], target[key]);
    }
  }
};

const FAIR_EQUALS = [null, "", undefined];

function _compare(src, tar) {
  if (typeof src !== "object") {
    return src === tar || (FAIR_EQUALS.includes(src) && FAIR_EQUALS.includes(tar));
  } else if (typeof src === typeof tar) {
    for (let key in src) {
      if (!src.hasOwnProperty(key)) continue;
      if (!_compare(src[key], tar[key])) return false;
    }
    for (let key in tar) {
      if (tar.hasOwnProperty(key) && !src.hasOwnProperty(key)) return false;
    }
    return true;
  } else {
    return false;
  }
}
export default {
  getValidUserPhone(phone) {
    if (phone.indexOf("+84") == 0) phone = phone.replace("+84", "0");
    if (phone.indexOf("84") == 0) phone = phone.replace("84", "0");
    if (phone.indexOf("+ 84") == 0) phone = phone.replace("+ 84", "0");
    return phone;
  },
  compare: _compare,
  clone(source) {
    if (typeof source !== "object") return source;
    const target = Array.isArray(source) ? [] : {};
    _deepClone(source, target);
    return target;
  },
  extract(obj = {}, props = []) {
    const extractedObj = {};
    props.forEach((prop) => {
      const from = prop.from || prop;
      const to = prop.to || from;
      if (obj.hasOwnProperty(from)) {
        extractedObj[to] = typeof prop.handler === "function" ? prop.handler(obj[from]) : obj[from];
      } else if (prop.hasOwnProperty("default")) {
        extractedObj[to] = prop.default;
      }
    });
    return extractedObj;
  },
  except(obj = {}, keys = []) {
    const exceptedObj = {};
    Object.keys(obj).forEach((key) => {
      if (!keys.includes(key)) exceptedObj[key] = obj[key];
    });
    return exceptedObj;
  },
  flatten(arr = []) {
    return Array.prototype.concat.apply([], arr);
  },
  // By default, filter all props that Boolean(value) === false
  filterObject(obj = {}, filter = Boolean) {
    const output = {};
    if (obj["not-clear-request"]) return obj;
    for (let key in obj) {
      if (filter(obj[key], key) || obj[key] === 0) {
        output[key] = obj[key];
      }
    }
    return output;
  },
  toLocaleDateTimeString(time) {
    return new Date(time).toLocaleString("vi");
  },
  formatTime(value, format) {
    if (!value || !format) return value;
    return moment(value).format(format);
  },
  prettifyDate(time, format = "DD/MM") {
    if (!time) return null;
    const thisYear = moment().year();
    const m = moment(time);
    return m.format(m.year() === thisYear ? format : format + "/YYYY");
  },
  familiarizeDate(time, append) {
    const mom = moment(time).startOf("day");
    const today = moment().startOf("day");
    let date = "";
    if (mom.isSame(today)) {
      date = "Today";
    } else if (today.clone().add(1, "day").isSame(mom)) {
      date = "Tomorrow";
    } else if (today.clone().subtract(1, "day").isSame(mom)) {
      date = "Yesterday";
    } else {
      let format = "Ngày DD MMMM";
      if (!mom.isSame(today, "year")) format += " YYYY";
      date = mom.format(format);
    }
    return date + (append ? moment(time).format(append) : "");
  },
  dobToAge(dateString) {
    if (!dateString) {
      return "Unknown";
    }
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },
  dateStringToTime(date) {
    // to GMT +7
    return moment(date, "YYYY-MM-DD").utcOffset(-480).valueOf();
  },
  async bulkRequest(items = [], promise) {
    const output = { dones: [], errs: [] };
    for (let item of items) {
      await promise(item)
        .then((res) => output.dones.push(res))
        .catch((e) => output.errs.push(e));
    }
    return output;
  },
  buildRequest(request) {
    request = this.filterObject(request);
    if (!request) return "";
    return (
      "?" +
      Object.keys(request)
        .map((k) => k + "=" + request[k])
        .join("&")
    );
  },
  removeUnicode(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      // eslint-disable-next-line
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      "-"
    );
    str = str.replace(/-+-/g, "-"); // thay thế 2- thành 1-
    // eslint-disable-next-line
    str = str.replace(/^\-+|\-+$/g, "");

    return str.trim().toLocaleLowerCase();
  },
  clearUnicode(str = "") {
    str = str.replace(/\s\s+/g, " ").trim();
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      // eslint-disable-next-line
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      " "
    );
    // eslint-disable-next-line
    str = str.replace(/^\-+|\-+$/g, "");
    str = str.replace(/\s\s+/g, " ").trim();
    console.log(str);
    return str.trim().toLocaleLowerCase();
  },
  generateUserName(name = "") {
    let nameArr = name.split(" ");
    if (nameArr[nameArr.length - 1].length === 1) {
      nameArr = nameArr.splice(-1, 1);
    }
    return nameArr
      .slice(0, nameArr.length - 1)
      .reduce((pre, cur) => pre + cur[0], nameArr[nameArr.length - 1]);
  },
  // formatMoney(amount, decimalCount = 0, decimal = '.', thousands = ',') {
  //   try {
  //     decimalCount = Math.abs(decimalCount)
  //     decimalCount = isNaN(decimalCount) ? 0 : decimalCount

  //     const negativeSign = amount < 0 ? '-' : ''

  //     let i = parseInt(
  //       (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
  //     ).toString()
  //     let j = i.length > 3 ? i.length % 3 : 0

  //     return (
  //       negativeSign +
  //       (j ? i.substr(0, j) + thousands : '') +
  //       i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
  //       (decimalCount
  //         ? decimal +
  //           Math.abs(amount - i)
  //             .toFixed(decimalCount)
  //             .slice(2)
  //         : '') +
  //       ' đ'
  //     )
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  delay(milliseconds) {
    return new Promise((resolve) => {
      this.timer = setTimeout(resolve, milliseconds);
    });
  },
  // exportExcel(json) {
  //   try {
  //     const csv = parse(json, Object.keys(json));
  //     return csv;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },

  moneyToString(SoTien) {
    var lan = 0;
    var i = 0;
    var so = 0;
    var KetQua = "";
    var tmp = "";
    var ViTri = [];
    if (SoTien < 0) return "Số tiền âm !";
    if (SoTien === 0) return "Không đồng !";
    if (SoTien > 0) {
      so = SoTien;
    } else {
      so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
      // SoTien = 0;
      return "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5])) {
      ViTri[5] = "0";
    }
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4])) {
      ViTri[4] = "0";
    }
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3])) {
      ViTri[3] = "0";
    }
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2])) {
      ViTri[2] = "0";
    }
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1])) {
      ViTri[1] = "0";
    }
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0])) {
      ViTri[0] = "0";
    }
    if (ViTri[5] > 0) {
      lan = 5;
    } else if (ViTri[4] > 0) {
      lan = 4;
    } else if (ViTri[3] > 0) {
      lan = 3;
    } else if (ViTri[2] > 0) {
      lan = 2;
    } else if (ViTri[1] > 0) {
      lan = 1;
    } else {
      lan = 0;
    }
    for (i = lan; i >= 0; i--) {
      tmp = DocSo3ChuSo(ViTri[i]);
      KetQua += tmp;
      if (ViTri[i] > 0) KetQua += Tien[i];
      if (i > 0 && tmp.length > 0) KetQua += ","; // && (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) === ",") {
      KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    return KetQua; // .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
  },
};
