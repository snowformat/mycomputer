import Vue from 'vue'
import Router from 'vue-router'
import ChargePage from '@/components/ChargePage'
import Success from '@/components/Success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChargePage',
      component: ChargePage
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
