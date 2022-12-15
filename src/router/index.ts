import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Concept',
      component: () => import('../views/NotreConcept.vue')
    },
    {
      path: '/Profile',
      component: () => import('../views/Inscription-Profile.vue')
    },
    {
      path: '/Statuts',
      component: () => import('../views/Inscription-Statut-PhotoProfile.vue'),
    },
    {
      path: '/Professionnel',
      component: () => import('../views/Inscription-StatutPhoto-Professionnel.vue'),
    },
    {
      path: '/Confidentialité',
      component: () => import('../views/Inscription-InfosConfidentitielles.vue'),
    }
  ]
})

export default router
