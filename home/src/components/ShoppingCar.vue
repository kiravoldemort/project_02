<template>
	<div class="shopCar">
		<div class="price">共￥{{$store.getters.price}}元</div>
		<router-link to="/payment" tag="div" class="buy">选好了</router-link>
	</div>
</template>
<style type="text/css" lang="scss">
	.shopCar {
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		font-size: 20px;
		background: #484d54;
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		.price {
			flex: 1;
		}
		.buy {
			width: 120px;
			background-color: #fe2947;
		}

	}
</style>