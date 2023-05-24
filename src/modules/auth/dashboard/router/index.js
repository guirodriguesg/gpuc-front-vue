import produtosRoutes from './../modules/produtos/router'

const Home = () => import('./../views/Home.vue')

export default [
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      ...produtosRoutes
    ]
  },
]
