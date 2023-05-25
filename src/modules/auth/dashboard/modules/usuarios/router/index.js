const Usuario = () => import('./../views/Usuario.vue')

export default [
  // { path: 'produto', component: Produto, meta: { requiresAuth: true}, alias: ['home']  },
  { path: 'usuario', component: Usuario, meta: { requiresAuth: true}  }
]
