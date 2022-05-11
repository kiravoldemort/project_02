<template>
	<div id="app">
	   <Header title="爱创课堂团购网">
	   		<template v-slot:backArrow>
	   			<div class="arrow" @touchend="$router.go(-1)"></div>
	   		</template>
	   		<template v-slot:login>
	   			<div class="login">登录</div>
	   		</template>
	   </Header>
	   <Search :sendmessage="receiveMessage" v-show="($route.path.indexOf('/detail/') !== 0 && $route.path !== '/payment')">
	   	 
	   </Search>
	   <router-view></router-view>
	</div>
</template>
<style type="text/css" lang="scss">
	*{
		margin: 0;
		padding: 0;
		list-style:none;
	}
	html, body{
		background: #efefef;
	}
</style>
<script type="text/javascript">
	import Header from './components/Header.vue';
	import Search from './components/Search.vue';
	export default{
		components: {Header, Search},
		methods: {
			receiveMessage(searchKeyWord){
				this.$store.commit('updateSearch', searchKeyWord);
			}
		}
	}

</script>


