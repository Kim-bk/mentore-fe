import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Feed from "../views/FeedView.vue"
import AccountType from "../views/AccountType.vue"
import ListMentor from "../views/ListMentorView.vue"
import ListWorkShop from "../views/ListWorkShopView.vue"
import SuccessPage from "../views/SuccessPage.vue"
import Admin from '@/views/Admin/AdminView.vue';
import InfoMentor from '@/views/InfoMentor.vue';
import ProfileMentee from '@/views/ProfileMentee.vue';
import Calendar from '@/views/CalendarView.vue';
import UserPost from '@/views/UserPost.vue';
import PopupPost from '@/components/PopupCreatePost.vue';
import ProfileMentor from '@/views/ProfileMentor.vue';

const routes = [
  {
      path:"/register",
      component: Register
  },
  {
    path:"/feed",
    component: Feed
  },
  {
      path:"/login",
      component: Login
  },
  {
    path: '/account-type',
    component: AccountType
  },
  {
    path: '/mentors',
    component: ListMentor
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/workshops',
    component: ListWorkShop
  },
  {
    path: '/success-page',
    component: SuccessPage
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/info-mentor',
    component: InfoMentor
  },
  {
    path: '/profile-mentee',
    component: ProfileMentee
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/user-post',
    component: UserPost
  },
  {
    path: '/profile-mentor/:id',
    component: ProfileMentor
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
