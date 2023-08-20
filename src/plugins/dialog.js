import utils from "./utils";

const _initConfirmData = {
  state: false,
  title: "",
  topContent: "",
  midContent: "",
  botContent: "",
  okText: "Xác nhận",
  cancelText: "Hủy",
  hideCancel: false,
  hideOk: false,
  done() {},
  cancel() {},
};

export default {
  confirmData: utils.clone(_initConfirmData),
  confirm(dialogData = {}) {
    Object.assign(this.confirmData, {
      state: true,
      ...dialogData,
    });
  },
  cancel() {
    this.confirmData.state = false;
    this.confirmData.cancel();
    setTimeout(() => {
      Object.assign(this.confirmData, _initConfirmData);
    }, 500);
  },
};
