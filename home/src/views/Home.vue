<template>
	<div class="page-home">
		<ul class="ickt-items">
			<router-link tag="li" :to="'/list/' + item.id" v-for="item in icons" :key="item.id">
				<img :src="'/img/icon/' + item.img">
				<p>{{item.text}}</p>
			</router-link>
		</ul>
		<ul class="ickt-ads">
			<router-link tag="li" :to="'/detail/' + item._id" v-for="(item, index) in ad" :key="index">
				<h3 :class="'color-' + index">{{item.title}}</h3>
				<p>{{item.description}}</p>
				<img :src="'/img/ad/' + item.url" alt="">
			</router-link>
		</ul>
		<div class="ickt-product">
			<h2>猜你喜欢</h2>
			<Product v-for = "item in list" :key="item._id"  :data="item">
				
			</Product>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
.page-home{
	.ickt-items{
		background: #fff;
		padding: 10px 0px;
		display: flex;
		flex-wrap: wrap;
		li{
			width: 20%;
			text-align: center;
			padding: 5px 0 10px;
			img{
				width: 60%;
				margin-bottom: 5px;
			}
			p{
				font-size: 12px;
			}
		}
	}
	.ickt-ads {
		background: #fff;
		margin-top: 10px;
		display: flex;
		li{
			flex: 1;
			border-right: 1px solid #ccc;
			text-align: center;
			padding: 10px 0;
			&:last-child{
				border-right: none;
			};
			h3{
				font-size: 16px;
				line-height: 24px;
				font-weight: normal;
			};
			p{
				font-size: 12px;
				margin: 4px 0 8px;
			};
			img{
				width: 60%;
			}
			$i: 0;
			@each $c in red, green, purple{
				.color-#{$i}{
					color: $c;
				}
				$i: $i+1;
			}
		}
	}
	.ickt-product{
		background: #fff;
		h2{
			background: #fff;
			margin: 10px 10px 0;
			border-bottom: 1px solid #ccc;
			padding: 15px 0px 10px;	
			font-size: 20px;
			font-weight: normal;
		}
	}
}
</style>
<script type="text/javascript">
	import Product from '../components/Product';
	export default {
		components: { Product },
		data(){
			return {
				icons: [
					{id: 1, img:'01.png', text:'美食'},
					{id: 2, img:'02.png', text:'电影'},
					{id: 3, img:'03.png', text:'酒店'},
					{id: 4, img:'04.png', text:'休闲'},
					{id: 5, img:'05.png', text:'外卖'},
					{id: 6, img:'06.png', text:'KTV'},
					{id: 7, img:'07.png', text:'周边游'},
					{id: 8, img:'08.png', text:'丽人'},
					{id: 9, img:'09.png', text:'小吃'},
					{id: 10, img:'10.png', text:'火车票'}
				],
				ad: [],
				list: []
			}
		},
		created() {
			this.$http
				.get('/data/home')
				.then(({ data }) => {
					this.ad = data.ad;
					this.list = data.list;
				})
		}
	}
</script>