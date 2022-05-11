import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import List from './views/List'
import Detail from './views/Detail'
import Payment from './views/Payment'

Vue.use(Router)

export default new Router({
	routes: [
	   { path: '/list/:id', component: List},
	   { path: '/detail/:id', component:Detail},
	   { path: '/payment', component: Payment},
	   { path: '*', component: Home}
	]
})