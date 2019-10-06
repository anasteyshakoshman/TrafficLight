import Vue from 'vue'
import App from './App'
import router from './router'
import color from './components/color'
import stopwatch from './components/stopwatch'

Vue.config.productionTip = false
Vue.component('color', color)
Vue.component('stopwatch', stopwatch)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
  router
})
