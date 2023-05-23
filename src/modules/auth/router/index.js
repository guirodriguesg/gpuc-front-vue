const Login = () => import('./../views/Login.vue')
const Produto = () => import('./../views/Produto.vue')

export default [
  { path: '/login', component: Login },
  { path: '/produtos', component: Produto }
]
