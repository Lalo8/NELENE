import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/router/HomePage'
import LoginPage from '@/router/auth/LoginPage'
import SignupPage from '@/router/auth/SignupPage'
import OrganisationPage from '@/router/org/OrganisationPage'
import NewOrganisationPage from '@/router/org/NewOrganisationPage'
import profileOrganisationPage from '@/router/org/profileOrganisationPage'
import editOrganisationPage from '@/router/org/editOrganisationPage'
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import Vuetify from 'vuetify'
import 'buefy/lib/buefy.css';

Vue.use(Buefy,{
  defaultIconPack:'fa'
});
Vue.use(Vuetify);


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage,

    },
    {
      path: '/signup',
      component: SignupPage
    }, 
    {
      path: '/organisations',
      component: OrganisationPage
    },
    {
      path: '/new',
      component: NewOrganisationPage
    },
    {
      path: '/organisations/:id',
      component: editOrganisationPage
    },
    {
      path: '/profile',
      component: profileOrganisationPage
    }


    


  ]
})
