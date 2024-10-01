import { createRouter, createWebHistory } from 'vue-router'
// import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import Home from '@/pages/Home.vue';



const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/woodtotems/:id', component: () => import('@/pages/WoodtotemView.vue')}
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

// This will update routes at runtime without reloading the page
// if (import.meta.hot) { 
//   handleHotUpdate(router) 
// } 