<template>
	<div class="ickt-header">
			<div class="header-left">
				<slot name="backArrow"></slot>
			</div>
			<router-link to="/" tag="h1" v-text="title"></router-link>
			<div class="header-right">
				<slot name="login"></slot>
			</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	@import '../base.scss';
	.ickt-header{
		display:flex;
		background-color: $navColor;
		color: #fff;
		height: 50px;
		line-height: 50px;
		text-align: center;
		h1{
			flex:1;
			font-size:24px;
			font-weight: normal;
		}
		.header-left,
		.header-right{
			width: 60px;
		}
		.arrow{
			position: relative;
			&:before,
		    &:after{
				@include renderArrow(10px, #fff, right);
				content: '';
				position: absolute;
				left: 10px;
				top: 16px;
			}
			&:after{
				left:13px;
				border-right-color: $navColor;
			}
		}
	
	}
</style>
<script type="text/javascript">
	export default{
		props: ['title']
	}
</script>