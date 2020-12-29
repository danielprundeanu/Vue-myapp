import Vue from 'vue'
import VueRouter from 'vue-router'

//import Elements from '../pages/Elements.vue'
//import Components from '../pages/Components.vue'
import Poll from '../components/Poll.vue'

const About = () => import(`../pages/theguide/about.md`).then(({ vue }) => {
  return { 
    extends:vue.component, 
    components: { Poll }
  }
})

const Whatsnew = () => import(`../pages/theguide/whatsnew.md`).then(({ vue }) => {
  return { 
     
       extends:vue.component, 
       components: { Poll } 
   }
})


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'The Guide',
    component: About
  },
  {
    path: '/theguide/whatsnew',
    name: 'Whats New',
    component: Whatsnew
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
    component: Whatsnew
  },
  {
    path: '/components',
    name: 'Components',
    component: Whatsnew
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
