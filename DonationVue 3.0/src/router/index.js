import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donations from '@/components/Donations'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Donate from '@/components/Donate'

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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    }
  ]
})
