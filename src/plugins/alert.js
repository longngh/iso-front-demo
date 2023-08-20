export default {
  alertData: {
    show: false,
    message: "",
    title: "",
    type: "error",
    isLastMessage: false,
  },
  close() {
    Object.assign(this.alertData, { show: false, message: "" });
  },
  show(type, title, message, isLastMessage) {
    Object.assign(this.alertData, { show: true, type, title, message, isLastMessage });
  },
  //Call these methods
  error(title, msg, isLastMessage = false) {
    this.close();
    this.show("error", title, msg, isLastMessage);
  },
  success(title, msg, isLastMessage = false) {
    this.show("success", title, msg, isLastMessage);
  },
  warn(title, msg, isLastMessage = false) {
    this.show("warning", title, msg, isLastMessage);
  },
  info(title, msg, isLastMessage = false) {
    this.show("info", title, msg, isLastMessage);
  },
};
