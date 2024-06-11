const Usuario = () => import('./../views/Usuario.vue')
const UsuarioList = () => import('./../views/UsuarioList.vue')

export default [
  { path: 'registra-usuario', component: Usuario, meta: { requiresAuth: true}  },
  { path: 'usuario-list', component: UsuarioList, meta: { requiresAuth: true}  }
]
