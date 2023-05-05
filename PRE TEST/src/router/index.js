import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetails from '../views/UserDetails.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/users/:id',
      name: 'details',
      component: UserDetails
    },
    {
      path:'/addUser',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/users/:id/edit',
      name: 'editUser',
      component: UpdateUser
    }
  ]
})

export default router
