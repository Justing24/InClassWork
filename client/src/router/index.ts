import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutListView from '../views/WorkoutListView.vue'
import AddWorkoutView from '../views/AddWorkoutView.vue'
import EditWorkoutView from '../views/EditWorkoutView.vue'
import StatsView from '../views/StatsView.vue'
import AdminView from '../views/AdminView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import IndexView from '../views/IndexView.vue'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    ,

    /* 
    TODO:
    list of current workouts
    add workouts and edditing workouts
    statistics page
    ADMIN
    */
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
        
        if(!session.user){
          return '/';
        }
      }
    }
    ,
    {
      //not sure why this aint working but whatever for now
      path: '/:pathMatch(.*)*',
      name: 'notfoundview',
      component: NotFoundView
    }
    
  ]
})

export default router
