import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Account from '../views/Account.vue'
import InfluencerList from '../views/InfluencerList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/influencer-list',
    name: 'InfluencerList',
    component: InfluencerList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
