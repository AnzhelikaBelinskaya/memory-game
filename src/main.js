import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import './styles/main.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
