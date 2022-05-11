import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Store({
	state: {
		username: ''
	},
	mutations: {
		updateUsername(state, value) {
			state.username = value
		}
	}
})