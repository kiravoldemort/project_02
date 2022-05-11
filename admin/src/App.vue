<template>
	<div class="app">
		<router-view v-if="$store.state.username"></router-view>
		<Login></Login>
	</div>
</template>
<style type="text/css" lang="scss">
	html, body {
		background: #efefef;
	}
</style>
<script type="text/javascript">
	import Login from './views/Login';
	export default {
		components: { Login },
		created() {
			this.$http
					.get('/admin/userinfo')
					.then( ({ data }) => {
						if(data.errorno === 0) {
							this.$store.commit('updateUsername', data.msg)
						}
					})
		}
	}
</script>