import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		searchKeyWord: '',
		//price: 0,
		product: []
	},
	getters: {
		price(state) {
			if(state.product.length === 0) {
				return 0;
			}
			return state.product
				.map(item => item.price)
				.reduce((pre, key) => pre + key)
		}
	},
	mutations:{
		updateSearch(state, searchKeyWord) {
			state.searchKeyWord = searchKeyWord;
		},
		addProduct(state, data) {
			if(Object.is(+data.price, NaN)) {
				return
			}
			if(state.product.find(item => item._id === data._id)){
				return
			}
			state.product.push(data);
		},
		deleteProduct(state, data) {
			if(Object.is(+data.price, NaN)) {
				return
			}
			let index = state.product.findIndex(item => item._id === data._id)
			if(index >= 0){
				state.product.splice(index, 1);
			}
		}
	},
	actions:{

	}

})