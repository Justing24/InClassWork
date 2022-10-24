import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import WorkoutListView from '../views/WorkoutListView.vue'
import AddWorkoutView from '../views/AddWorkoutView.vue'
import EditWorkoutView from '../views/EditWorkoutView.vue'
import StatsView from '../views/StatsView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import session from '@/stores/session'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from) => {
        
        if(!session.user){
          return '/';
        }
      }
    },

    {
      path: '/workout',
      name: 'workout',
      component: WorkoutListView,
      beforeEnter: (to, from) => {
        
        if(!session.user){
          return '/';
        }
      }
    }
    ,
    {
      path: '/addworkout',
      name: 'addworkout',
      component: AddWorkoutView,
      beforeEnter: (to, from) => {
        
        if(!session.user){
          return '/';
        }
      }
    }
    ,
    {
      path: '/editworkout',
      name: 'editworkout',
      component: EditWorkoutView,
      beforeEnter: (to, from) => {
        
        if(!session.user){
          return '/';
        }
      }
    }
    ,
    {
      path: '/stats',
      name: 'stats',
      component: StatsView,
      beforeEnter: (to, from) => {
        
        if(!session.user){
          return '/';
        }
      }
    }
    ,
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: (to, from) => {
        if(session.user?.firstName !='Justin' || session.user?.lastName !='Ginese'){
          return '/home';
        }
      }
    }
    ,
    {
      path: '/:pathMatch(.*)*',
      name: 'notfoundview',
      component: NotFoundView
    }
    
  ]
})

export default router
