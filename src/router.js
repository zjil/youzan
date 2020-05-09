import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Shop = ()=>import('./pages/shop/Shop.vue')
const Good = ()=>import('./pages/good/Good.vue')
const Home = ()=>import('./pages/home/Home.vue')
const goodPublic = ()=>import('./pages/good/goodPublic.vue')

const router = new VueRouter({
    routes :[
      {
        path:'/',
        component:Home
      },
      {
        path:'/shop',
        component:Shop
      },
      {
        path:'/good',
        component:Good
      },
      {
        path:'/survey',
        component:Home
      },
      {
        path:'/public',
        component:goodPublic
      }
    ]
  })

export default router