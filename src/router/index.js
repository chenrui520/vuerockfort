import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Supervision',
    name: 'Supervision',
    component: () => import('../views/Supervision.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/WhyYouChoose',
    name: 'WhyYouChoose',
    component: () => import('../views/WhyYouChoose.vue')
  },
  {
    path:'/Understand',
    name:'Understand',
    component:() => import('../views/Understand.vue')
  },
  {
    path:'/produck',
    name:'produck',
    component:() => import('../views/produck.vue')
  },
  {
    path: '/SoftwareDownload',
    name: 'SoftwareDownload',
    component: () => import('../views/softwareDownload.vue')
  },
  {
    path: '/Introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
