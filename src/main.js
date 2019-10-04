import Vue from 'vue'
import App from './App'
import router from './router'
import color from './components/color'

Vue.config.productionTip = false
Vue.component('color', color)

class State {
  constructor (path, dur, next) {
    this.path = path
    this.dur = dur
    this.next = next
  }
}

class Constroller {
  trigger (state, callback) {
    callback(state.path)
    setTimeout(() => {
      this.trigger(state.next, callback)
    }, state.dur * 1000)
  }
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  mounted () {
    var constroller = new Constroller()
    var red = new State('/red', 2)
    var yellowR = new State('/yellow', 1)
    var yellowG = new State('/yellow', 1)
    var green = new State('/green', 3)

    red.next = yellowR
    yellowR.next = green
    green.next = yellowG
    yellowG.next = red

    constroller.trigger(red, (state) => {
      router.go({path: state.path})
    })
  }
})
