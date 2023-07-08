import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Feed from "../views/FeedView.vue"
import AccountType from "../views/AccountType.vue"
import ListMentor from "../views/ListMentorView.vue"
import ListWorkShop from "../views/ListWorkShopView.vue"
import SuccessPage from "../views/SuccessPage.vue"
import InfoMentor from '@/views/InfoMentor.vue';
import ProfileMentee from '@/views/ProfileMentee.vue';
import ProfileMentor from '@/views/ProfileMentor.vue';
import Calendar from '@/views/CalendarView.vue';
import MentorCalendar from '../views/MentorCalendar.vue';
import UserPost from '@/views/UserPost.vue';
import PopupPost from '@/components/PopupCreatePost.vue';
import ViewMentor from '@/views/ViewMentor.vue';
import PopupUpdatePost from '@/components/PopupUpdatePost.vue';
import AdminWorkshop from '@/views/Admin/AdminWorkshop.vue';
import AdminPost from '@/views/Admin/AdminPost.vue';
import AdminDetailPost from '@/views/Admin/components/DetailsPost.vue';
import WorkshopUpdate from '@/views/Admin/components/DetailsWorkshop.vue';
import WorkshopCreate from '@/views/Admin/components/CreateWorkshop.vue';
import ForbiddenPage from '@/views/Forbidden/403.vue'
import MentorWorkshop from '@/views/MentorWorkshop.vue'
import MenteeWorkshop from '@/views/MenteeWorkshop.vue'
import AdminLogin from '@/views/Admin/AdminLogin.vue'
import UpdateAppointment from '@/components/UpdateAppointment.vue'

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
    path: '/info-mentor',
    component: InfoMentor
  },
  {
    path: '/profile-mentee',
    component: ProfileMentee
  },
  {
    path: '/profile-mentor',
    component: ProfileMentor
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
    path: '/view-mentor/:id',
    component: ViewMentor
  },
  {
    path: '/post/update/:id',
    component: PopupUpdatePost
  },
  {
    path: '/appointment/:id',
    component: UpdateAppointment
  },
  {
    path: '/calendar/mentor/:id',
    component: MentorCalendar
  },
  {
    path: '/admin/posts',
    component: AdminPost
  },
  {
    path: '/admin/workshops',
    component: AdminWorkshop
  },
  {
    path: '/admin/detail-post/:id',
    name: 'admin-detail-post',
    component: AdminDetailPost
  },
  {
    path: '/workshop/update/:id',
    component: WorkshopUpdate
  },
  {
    path: '/403',
    component: ForbiddenPage
  },
  {
    path: '/admin/create-workshop',
    component: WorkshopCreate
  },
  {
    path: '/workshop/mentor',
    component: MentorWorkshop
  },
  {
    path: '/workshop/mentee',
    component: MenteeWorkshop
  },
  {
    path: '/admin',
    component: AdminLogin
  },
]

const router = createRouter({
  history: createWebHistory('/mentore-fe/'),
  routes
})

export default router
