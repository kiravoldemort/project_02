<template>
	<div class="page-payment">
		<div class="total-price">
			<span class="itemPrice">商品总价</span>
			<span class="num">￥{{$store.getters.price}}</span>
		</div>
		<div class="buy-product">
			<span class="cancel" @touchend="$router.go(-1)">取消购买</span>
			<span class="buy" @touchend="buygoods">购买商品</span>
		</div>
		<h2>已购商品</h2>
		<Product v-for="item in $store.state.product" :key="item._id" :data="item"></Product>
	</div>
</template>
<style type="text/css" lang="scss">
	.page-payment {
		.total-price {
			background: #fff;
			padding: 30px 20px 20px;
			font-size: 18px;
			.num {
				color: #f30;
				font-size: 30px;
			}
		}
		.buy-product {
			padding: 10px;
			background: #fff;
			text-align: center;
			span{
				font-size: 12px;
				padding: 5px 10px;
				border-radius: 4px;
				color: #fff;
				background: #ccc;
				margin: 0 10px;
			}
			.buy {
				background: #f30;
			}
		}
		h2 {
			font-size: 20px;
			padding: 20px 20px 10px;
			font-weight: normal;
			background: #fff;
		}
	}
</style>
<script type="text/javascript">
	import Product from '../components/Product';
	export default {
		components: { Product },
		methods: {
			buygoods() {
				this.$http
				.post('/data/buy' , {ids: this.$store.state.product.map(item => item._id)})
			}
		}
	}
</script>