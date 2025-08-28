import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './view/HomeView.vue'
import AboutView from './view/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router