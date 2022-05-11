<template>
	<div class="page-goods-list">
		<h1 class="page-title">商品列表</h1>
		<div class="goods-list">
			<el-card class="card" v-for="item in list" :key="item._id">
				<img :src="item.img" alt="">
				<h2>{{item.title}}</h2>
				<p>
					<span class="price">￥{{item.price}}</span>
					<span class="type">{{item.type | goodstype}}</span>
				</p>
				<p>已销售{{item.sales}}份</p>
				<router-link class="" tag="span" :to="'/goods/edit/'+item._id"></router-link>
				<el-button size="small" type="danger" @click="removeItem(item._id)">删除</el-button>
			</el-card>
		</div>
		<div class="btns">
			<router-link :to="'/goods/list/'+ (+$route.params.page<2?1: $route.params.page-1)" class="el-button el-button el-button--default is-round" tag="span">&larr;上一页</router-link>
			<router-link :to="'/goods/list/' + (+$route.params.page+1)" tag="span" class="el-button el-button--default is-round">下一页 &rarr;</router-link>
		</div>
	</div>
</template>
<style srec="text/style" lang="scss">
	.page-goods-list {
		.goods-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
		.el-card {
			width: 280px;
			margin-bottom: 30px;
			img {
				width: 240px;
				height: 135px;
			}
			h2 {
				font-size: 22px;
				font-weight: normal;
			}
			p {
				font-size: 14px;
				color: #333;
			}
			.price {
				color: #f30;
			}
		}
		.btns {
			margin: 30px 0 50px;
			text-align: center;
		}
	}
</style>
<script type="text/javascript">
	let types = [
		{ label: '美食', value: '1' },
		{ label: '电影', value: '2' },
		{ label: '酒店', value: '3' },
		{ label: '休闲', value: '4' },
		{ label: '外卖', value: '5' },
		{ label: 'KTV', value: '6' },
		{ label: '周边游', value: '7' },
		{ label: '丽人', value: '8' },
		{ label: '小吃', value: '9' },
		{ label: '火车票', value: '10' },
	]
	export default {
		data() {
			return {
				list: []
			}
		},
		filters: {
			goodstype(id)  {
				return types.find(item => {
					return item.value === id
				})?item.label:'其他';
			}
		}
		methods: { 
			getData() {
				this.$http
						.get('/admin/goods/list', {this.$route.params})
						.then(({data}) => {
							if(data.errno === 0) {
								this.list = data.data; 	
							} else{
								this.$alert(data.msg);
								this.list = [];
							}
						})
			},
			removeItem(id) {
				this.$http
						.post('/admin/goods/delete', {id})
						.then( ({data}) => {
							if(data.errno === 0){
								window.location.reload();
							} else {
								this.$alert(data.msg)
							}
						})
			}
		},
		created() {
			this.getData()
		}
		watch() {
			$route() {
				this.getData()
			}
		}
	}
</script>