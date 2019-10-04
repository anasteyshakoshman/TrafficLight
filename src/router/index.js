import Vue from 'vue'
import Router from 'vue-router'
import color from '@/components/color'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/red',
      component: color
    },
    {
      path: '/yellow',
      component: color
    },
    {
      path: '/green',
      component: color
    }
  ]
})
