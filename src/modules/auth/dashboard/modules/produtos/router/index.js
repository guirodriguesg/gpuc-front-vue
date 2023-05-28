const Produto = () => import('./../views/Produto.vue')
const ProdutoList = () => import('./../views/ProdutoList.vue')
const ProdutoCreate = () => import('./../views/ProdutoCreate.vue')
const ProdutoEdit = () => import('./../views/ProdutoEdit.vue')

export default [
  { path: 'produto', component: Produto, meta: { requiresAuth: true}  },
  { path: 'produto-list', component: ProdutoList, meta: { requiresAuth: true}  },
  { path: 'produto-create', component: ProdutoCreate, meta: { requiresAuth: true}  },
  { path: 'produto-edit/:id', name: 'item-detalhes', component: ProdutoEdit, meta: { requiresAuth: true}  },
]
