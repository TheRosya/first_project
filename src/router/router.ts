import HomePage from './../view/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/posts',
    name: 'post-list',
    component: () => import('./../view/PostPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./../view/About.vue'),
  },
  {
    path: '/posts/:id',
    name: 'post-item',
    component: () => import('./../view/PostItemPage.vue'),
  },
  ]
})

export default router;

