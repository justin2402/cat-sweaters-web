import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "@/views/ShopView.vue";
import AccountView from "@/views/AccountView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'ShopView',
    component: ShopView
  }
  ,
  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
  }
]

const router = new VueRouter({
  routes
})

export default router
