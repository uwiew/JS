export default {
  checkLogin (mine, $router, callback = () => {}) {
    let interval = window.setInterval(() => {
      if (mine.isFinishUpdate) {
        window.clearInterval(interval)
        mine.mine || $router.replace('/login')
      } else {
        callback()
      }
    }, 100)
  }
}
