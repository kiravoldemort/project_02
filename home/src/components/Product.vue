<template>
	<div class="ickt-product">
		<router-link class="product-inner" tag="div" :to="'/detail/' + data._id">
			<img :src="data.img" alt="">
			<div class="productInfo">
				<h3>{{data.title}}</h3>
				<div>
					<span class="price">{{data.price}}元</span>
					<span class="origin-price">门市价:{{data.originPrice}}元</span>
					<span class="sales">销量{{data.sales}}</span>
				</div>
			</div>
		</router-link>
	</div>
</template>
<style type="text/css" lang="scss">
 	@import '../base.scss';
 	.ickt-product {
 		background: #fff;
 		.product-inner {
 			margin: 0 10px;
 			border-bottom: 1px solid #ccc;
 			padding: 10px 0;
 			display: flex;
 		}
		img{
			width: 60px;
			height: 60.5px;
		}
		.productInfo{
			flex:1;
			padding-left: 10px;
			h3{
				font-size: 14px;
				height: 44px;
			}
			div{
				font-size: 12px;
			}
			.price{
				color: $navColor;
				margin-right: 6px;
			}
			.sales {
				float: right;
			}
		}
 	}
</style>
<script type="text/javascript">
	export default{
		props: ['data']
	}
</script>