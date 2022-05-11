<template>
	<div class="page-detail">
		<div class="img-part">
			<img :src=" data.img" alt="">
			<h2>{{data.title}}</h2>
			<h3>{{data.description}}</h3>
		</div>
		<div class="price-part">
			<span class="price"><strong>{{data.price}}</strong>元</span>
			<span>门市价:{{data.originPrice}}元</span>
			<span :class="{
				'buy': true,
				'has-buy': data.hasbuy
			}" @touchend="buynow">{{data.hasbuy?'取消购买':'立即购买'}}
			</span>
		</div>
		<div class="info-part">
			<span>支持立即退货</span>
			<span>支持随时退货</span>
			<h3>销量{{data.sales}}</h3>
		</div>
		<div class="store-info">
			<div class="store">店家信息</div>
			<div class="storedetail">
				<h3>{{data.storeName}}</h3>
				<h3>{{data.storeAddress}}</h3>
			</div>
			<div>查看{{data.storeNum}}家分店</div>
		</div>
		<div class="buy-info">
			<p class="buyinform">购买须知</p>
			<p v-html="data.content"></p>
		</div>
		<ShoppingCar>
		</ShoppingCar>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../base.scss';
	.page-detail {
		margin-bottom: 20px;
		.img-part {
			position: relative;
			color: #fff;
			img{
				width: 100%;
				height: 400px;
				display: block;
			}
			h2, h3 {
				position: absolute;
				left: 10px;
				bottom: 15px;
			}
			h2{
				bottom: 35px;
				font-weight: normal;
			}
		}
		.price-part {
			font-size: 16px;
			background: #fff;
			padding: 0 10px;
			.price {
				color: $navColor;
				font-size: 20px;
				margin-right: 10px;
				strong {
					font-weight: normal;
					font-size: 40px;
				}
			}
			.buy {
				color: #fff;
				background: #f30;
				font-size: 12px;
				float: right;
				border-radius: 3px;
				padding: 5px 10px;
				margin-top: 13px;
				&.has-buy{
					background: #efefef;
					color: #333;
				}
			}
		}
		.info-part {
			background: #fff;
			padding: 10px 0px;
			display: flex;
			flex-wrap: wrap;
			border-top: 1px solid #ccc;
			span {
				width: 50%;
				color: yellowgreen;
				line-height: 30px;
			}
			h3 {
				color: #000;
			}
		}
		.store-info {
			margin-top:10px;
			padding: 10px;
			background: #fff;
			.store {
				padding: 8px 0 10px;
				font-size: 22px;
				border-bottom: 1px solid #ccc;			
			}
			.storedetail {
				padding: 10px 0;
				line-height: 30px;
				font-size: 16px;
			}
			&:last-child {
				color: skyblue;
			}
		}
		.buy-info {
			padding: 15px 5px;
			.buyinform {
				font-weight: bold;
				height: 30px;
				line-height: 30px;
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>
<script type="text/javascript">
	import ShoppingCar from '../components/ShoppingCar';
	export default {
		components: { ShoppingCar },
		data() {
			return {
				data: {}
			}
		},
		methods: {
			getData(){
				let { params } = this.$route;
				this.$http
				 	.get('/data/product', {params})
				 	.then( ({data}) => {
				 		console.log("111",data);
				 		if(this.$store.state.product.find( item => 
				 			 item._id === data._id)) {
				 			data.hasbuy = true;
				 		}
				 		this.data = data;
				 	})
			},
			buynow() {
				if(this.data.hasbuy){
					this.$store.commit('deleteProduct',this.data)
				}else {
					this.$store.commit('addProduct', this.data)
				}
				this.$set(this.data, 'hasbuy', !this.data.hasbuy)
			}
		},
		created() {
			this.getData();
		},
		watch: {
			$route(){
				this.getData();
			}
		}
	}
</script>