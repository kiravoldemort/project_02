import Vue from 'vue'

import App from './App.vue'

import router from './router.js'

import store from './store'

import axios from 'axios'

import './registerServiceWorker'

Vue.prototype.$http = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')