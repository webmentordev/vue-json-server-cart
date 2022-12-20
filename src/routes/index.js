import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CreateProduct from '../components/CreateProduct.vue'
import Cart from '../components/Items.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-product',
    name: 'Post',
    component: CreateProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router