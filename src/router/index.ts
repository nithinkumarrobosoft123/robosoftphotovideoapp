import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import PhotoDetails from '../views/PhotoDetails.vue';
import VideoDetails from '../views/VideoDetails.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/photoDetails',
    name: 'photoDetails',
    component: PhotoDetails,
  },
  {
    path: '/videoDetails',
    name: 'videoDetails',
    component: VideoDetails,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
