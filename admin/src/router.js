// 引入vue
import Vue from 'vue';
// 引入路由
import Router from 'vue-router';
// 引入页面
import Home from './views/Home';
// 默认页面
import Main from './views/Main';
// 商品相关页面
import GoodsCreate from './views/goods/Create';
import GoodsList from './views/goods/List';
import GoodsEdit from './views/goods/Edit';
// 用户相关页面
import UserCreate from './views/user/Create';
import UserList from './views/user/List';
import UserEdit from './views/user/Edit';
// 首页相关页面
import HomeAds from './views/home/Ads';
import HomeTypes from './views/home/Types';

Vue.use(Router);

let routers = [
	{
		path: '/',
		components: Home,
		children: [
			{ path: '/goods/create', component: GoodsCreate },
			{ path: '/goods/list/:page', component: GoodsList },
			{ path: '/goods/edit/:id', component: GoodsEdit },
			{ path: '/user/create', component: UserCreate },
			{ path: '/user/list/:page', component: UserList },
			{ path: '/user/edit/:id', component: UserEdit },
			{ path: '/home/ads', component: HomeAds },
			{ path: '/goods/types', component: HomeTypes },
			{ path: '*', component: Main },

		]
	}
]

export default new Router({ routes })