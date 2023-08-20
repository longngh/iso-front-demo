let _temp = 0

export default {
  active: false,
  show () {
    _temp++
    this.active = true
  },
  hide () {
    if (this.active && !--_temp) this.active = false
  },
  async wait (promise) {
    if (promise && promise.finally) {
      this.show()
      return promise.finally(() => {
        this.hide()
      })
    } else {
      return Promise.resolve()
    }
  }
}
