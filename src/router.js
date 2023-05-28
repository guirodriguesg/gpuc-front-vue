import Vue from 'vue'
import Router from 'vue-router'

import authRoutes from '@/modules/auth/router'
import dashBoardRoutes from '@/modules/auth/dashboard/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRoutes,
    ...dashBoardRoutes,
    {
      path: '',
      redirect: '/login',
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log(requiresAuth)
  console.log(localStorage.getItem('token'))
  if ((requiresAuth && localStorage.getItem('token') === null)) {
    console.log("TO LOGIN")
    next({ path: '/login', query: { redirect: to.fullPath } })
  }
  else {
    console.log('TO OTHER')
    next()
  }
})

export default router