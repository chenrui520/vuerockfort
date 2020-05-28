import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './components/jsonp'

Vue.config.productionTip = false
Vue.prototype.AJAX = ajax
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
