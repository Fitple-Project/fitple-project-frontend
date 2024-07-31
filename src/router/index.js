import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import BusinessSignupPage from '@/views/BusinessSignupPage.vue';
import StoreSearchPage from '@/views/StoreSearchPage.vue';
import TrainerComparePage from '@/views/TrainerComparePage.vue';
import TrainerDetailPage from '@/views/TrainerDetailPage.vue';
import TrainerReviewsPage from '@/views/TrainerReviewsPage.vue';
import StoreManagementPage from "@/views/StoreManagementPage.vue";
import MembershipPage from '@/views/MembershipPage.vue';
import CartPage from '@/views/CartPage.vue';
import PaymentsPage from '@/views/PaymentsPage.vue';
import PaymentCompletePage from '@/views/PaymentCompletePage.vue';
import StoreDetailPage from '@/views/StoreDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
  },
  {

    path: '/store/:id',
    name: 'storeDetail',
    component: StoreDetailPage,
  },
  {
    path: '/business-signup',
    name: 'business-signup',
    component: BusinessSignupPage,
  },
  {
    path: '/store-search',
    name: 'store-search',
    component: StoreSearchPage,
  },
  {
    path: '/trainer-compare',
    name: 'trainer-compare',
    component: TrainerComparePage,
  },
  {
    path: '/trainer-detail/:id',
    name: 'trainer-detail',
    component: TrainerDetailPage,
  },
  {
    path: '/trainer-detail/:id/reviews',
    name: 'trainer-reviews',
    component: TrainerReviewsPage,
  },
  {
    path: "/store-management",
    name: "store-management",
    component: StoreManagementPage,
  },
  {
    path: '/membership',
    name: 'membership',
    component: MembershipPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/payments',
    name: 'Payments',
    component: PaymentsPage
  },
  {
    path: '/payment-complete',
    name: 'PaymentComplete',
    component: PaymentCompletePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;