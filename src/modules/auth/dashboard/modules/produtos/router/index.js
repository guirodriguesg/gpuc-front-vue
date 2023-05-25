const Produto = () => import('./../views/Produto.vue')

export default [
  { path: 'produto', component: Produto, meta: { requiresAuth: true}  },
  // { path: 'produto', component: Produto, meta: { requiresAuth: true}, alias: ['home']  },
  // { path: 'usuario', component: Usuario, meta: { requiresAuth: true}  }
]
