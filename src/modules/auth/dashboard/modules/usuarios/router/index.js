const Usuario = () => import('./../views/Usuario.vue')

export default [
  { path: 'registra-usuario', component: Usuario, meta: { requiresAuth: true}  }
]
