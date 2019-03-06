import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import App from '../App'
import index from '../components/index'
import mine from '../components/mine'
import deal from '../components/deal'
import first from '../components/first'
import balance from '../components/today_balance'
import customer from '../components/customer_list'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
			name: 'App',
      component: App,
			children: [
				{
					path: '/login',
					name: 'login',
					component: login
				}
			],
			redirect: '/login'
    },
		{
			path: '/index',
			name: 'index',
			component: index,
			children: [
				{
					path: '/mine',
					name: 'mine',
					component: mine
				},
				{
					path: '/deal',
					name: 'deal',
					component: deal
				},
				{
					path: '/first',
					name: 'first',
					component: first
				}
			]
		},
		{
			path: '/balance',
			name: 'balance',
			component: balance
		},
		{
			path: '/customer',
			name: 'customer',
			component: customer
		}
  ]
})
