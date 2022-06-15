import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/flex',
      name: 'flex',
      component: () => import('@/views/flex/FlexBase.vue')
    }
  ]
})

export default router;