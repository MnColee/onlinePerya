import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import TermsAndCondition from '../views/TermsAndCondition.vue'
import VerifySuccess from '../views/VerifySuccess.vue'
import VerifyView from '../views/VerifyView.vue'
import ResetPassword from '../views/ResetPassword.vue'

import HomeUser from '../pages/HomeUser.vue'
import TableGameView from '../pages/TableGameView.vue'
import CardGameView from '../pages/CardGameView.vue'
import BuyCreditsView from '../pages/BuyCreditsView.vue'
import WithdrawView from '../pages/WithdrawView.vue'
import HistoryView from '../pages/HistoryView.vue'
import SettingsView from '../pages/SettingsView.vue'
import ChangePassView from '../pages/ChangePassView.vue'
import ReferralView from '../pages/ReferralView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/termsandcondition',
      name: 'TermsAndCondition',
      component: TermsAndCondition
    },
    {
      path: '/verifysuccess',
      name: 'VerifySuccess',
      component: VerifySuccess,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/verifyemail',
      name: 'VerifyYourEmail',
      component: VerifyView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes',
      name: 'HomeUser',
      component: HomeUser,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/tablegame',
      name: 'TableGameView',
      component: TableGameView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/cardgame',
      name: 'CardGameView',
      component: CardGameView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/buycredits',
      name: 'BuyCreditsView',
      component: BuyCreditsView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/withdraw',
      name: 'WithdrawView',
      component: WithdrawView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/transactionhistory',
      name: 'HistoryView',
      component: HistoryView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/setting',
      name: 'SettingsView',
      component: SettingsView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/changepassword',
      name: 'ChangePassView',
      component: ChangePassView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/homes/referral',
      name: 'ReferralView',
      component: ReferralView,
      meta: {
        hideNavbar: true,
      }
    },
  ]
})

export default router
