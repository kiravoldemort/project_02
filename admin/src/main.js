import Vue from 'vue';

import axios from 'axios';

import ElementUI from 'element-ui';

import App from './App';

import store from './store';

import router from './router';

import VueQuilEditor from 'vue-quill-editor';

import 'element-ui/lib/theme-chalk/index.css';

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.prototype.$http = axios;

Vue.use(ElementUI);

Vue.use(VueQuilEditor);

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')