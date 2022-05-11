<template>
	<div class="ickt-search">
		<input type="text" placeholder="请输入搜索关键字" @keyup.enter="fn" v-model="searchKeyWord">
	</div>
</template>
<style type="text/css" lang="scss">
	.ickt-search{
		background-color: #fff;
		padding: 10px 20px;
		display: flex;
		input{
			padding: 10px 20px;
			flex: 1;
			border-radius: 19px;
			background-color: #efefef;
			font-size: 12px;
			border: none;
			outline: none;
		}
	}
</style>
<script type="text/javascript">
	export default{
		props: ['sendmessage'],
		data(){
			return {
				searchKeyWord: ''
			}
		},
		methods:{
			fn(){
				this.sendmessage(this.searchKeyWord);
				this.searchKeyWord = ''
			}
		}
	}
	
</script>