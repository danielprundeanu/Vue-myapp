import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction.vue'
import Principles from '../views/Principles.vue'
import Elements from '../views/Elements.vue'
import Components from '../views/Components.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/principles',
    name: 'Principles',
    component: Principles
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "principles" */ '../views/Principles.vue')
  },
  {
    // path: '/elements/:capitol/:subcapitol',
    path: '/elements',
    props: true,
    name: 'Elements',
    component: Elements
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
