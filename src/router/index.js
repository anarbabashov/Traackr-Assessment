import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Account from '../views/Account.vue';
import Influencers from '../views/Influencers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/influencers',
    name: 'Influencers',
    component: Influencers,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
