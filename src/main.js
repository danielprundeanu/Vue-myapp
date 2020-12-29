import Vue from 'vue'
import App from './App.vue'
import router from './router'



//import Menu
Vue.component('MenuList',require('./components/MenuList.vue').default);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
