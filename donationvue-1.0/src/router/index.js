import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donations from '@/components/Donations'
import Donate from '@/components/Donate'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donations',
      name: 'Donations',
      component: Donations
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
