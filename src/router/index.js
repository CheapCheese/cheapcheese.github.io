import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SupermarketView from "../views/SupermarketView.vue";
import CatalogView from "../views/CatalogView.vue";
import MapView from "../views/MapView.vue";
import GraphView from "../views/GraphView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/supermarket',
      name: 'supermarketPage',
      component: SupermarketView
    },
    {
      path: '/catalog',
      name: 'catalogPage',
      component: CatalogView
    },
    {
      path: '/map',
      name: 'mapPage',
      component: MapView
    },
    {
      path: '/graph',
      name: 'graphPage',
      component: GraphView
    }
  ]
})

export default router
