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


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: OrganisationPage,
      meta: {
        // the meta object can contain any information
        // about the route that you may want to use
        // elsewhere, like in beforeEach
        requiresNonAuth: true,
      },

    },
    {
      path: '/login',
      component: LoginPage,
      meta: {
        // the meta object can contain any information
        // about the route that you may want to use
        // elsewhere, like in beforeEach
        requiresNonAuth: true,
      },

    },
    {
      path: '/signup',
      component: SignupPage,
      meta: {
        // the meta object can contain any information
        // about the route that you may want to use
        // elsewhere, like in beforeEach
        requiresNonAuth: true,
      },
    }, 
    {
      path: '/organisations',
      component: OrganisationPage,
      meta: {
        // the meta object can contain any information
        // about the route that you may want to use
        // elsewhere, like in beforeEach
        requiresNonAuth: true,
      },
    },
    {
      path: '/new',
      component: NewOrganisationPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/organisations/:id',
      component: editOrganisationPage,
      meta: {
        requiresAuth: true,
      },
      
    },
    {
      path: '/:id',
      component: profileOrganisationPage,
      meta: {
        // the meta object can contain any information
        // about the route that you may want to use
        // elsewhere, like in beforeEach
        requiresNonAuth: true,
      },

    }


  ]
})

// The callback passed to beforeEach will
// get executed every time we try to navigate
// There we can check the meta attribute
router.beforeEach((to, from, next) => {
  // Warning: This doesn't work for nested routes!
  // If you have nested routes use the version at
  // https://router.vuejs.org/en/advanced/meta.html
  if (to.meta.requiresAuth) {
    // The navigation may happen before the root (new Vue in main.js)
    // is created (hook where we call checkUser), to prevent that,
    // we call it here
    checkUser(router.app.$root);
    if (!router.app.$root.user) {
      // we return because we can only call next once
      // next with a parameter allows us to control
      // where we redirect the user
      return next({
        path: '/login',
        query: {
          // URL queries cannot contain specific characters
          // like / or ?, so we use encodeURIComponent
          // to transform it into a valide query value
          // We will have to use the complementary function
          // decodeURIComponent to get the orginial value
          redirect: encodeURIComponent(to.fullPath),
        },
      });
    }
  }

  // we must always call next to let the
  // navigation happen
  next();
});

// This one is pretty much the opposite
// We only want guests to access login and
// signup pages. It's probably an error on
// their end if they try to go to login or
// signup while logged in, so we redirect
// them to a more welcoming place :)
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresNonAuth) {
//     checkUser(router.app.$root);
//     if (!router.app.$root.user) return next('/');
//   }
//   next();
// });

export default router;
