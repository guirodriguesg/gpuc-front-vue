const Produto = () => import('./../views/Produto.vue')
const ProdutoList = () => import('./../views/ProdutoList.vue')
const ProdutoEdit = () => import('./../views/ProdutoEdit.vue')

export default [
  { path: 'produto', component: Produto, meta: { requiresAuth: true}  },
  { path: 'produto-list', component: ProdutoList, meta: { requiresAuth: true}  },
  { path: 'produto-edit/:id', name: 'item-detalhes', component: ProdutoEdit, meta: { requiresAuth: true}  },
  // { path: 'produto', component: Produto, meta: { requiresAuth: true}, alias: ['home']  },
  // { path: 'usuario', component: Usuario, meta: { requiresAuth: true}  }
]
