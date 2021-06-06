import Vue from 'vue'
import VueRouter from 'vue-router'
import StartScreen from './components/StartScreen.vue'
import PlayScreen from './components/PlayScreen.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: StartScreen },
  { path: '/play', component: PlayScreen }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})