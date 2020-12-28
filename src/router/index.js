import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../pages/Introduction.vue'
import Principles from '../pages/Principles.vue'
import Elements from '../pages/Elements.vue'
import Components from '../pages/Components.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/introduction',
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
