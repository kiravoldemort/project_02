<template>
	<div class="page-list">
		<ul class="ickt-sort">
			<li v-for="item in dataSort" :key="item.id" @touchend = "sortList(item.id)">
				<span>{{item.text}}</span>
				<span class="arrow"></span>
			</li>
		</ul>
		<Product v-for="item in list" :key="item._id" :data="item"></Product>
		<div class="showelse" v-show="others.length" @touchend="showElseInfo">
			<span>查看其他{{others.length}}条数据</span>
			<span class="otherarrow"></span>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import '../base.scss';
	.page-list{
		.ickt-sort{
			background: #fff;
			display: flex;
			li{
				width: (100%/4);
				font-size: 12px;
				border-bottom: 1px solid #ccc;
				border-right: 1px solid #ccc;
				text-align: center;
				padding: 4px 0 8px;
				&:last-child{
					border-right:none;
				};
				.arrow{
					@include renderArrow(8px);
					position: relative;
					top: -2px;
					left: 2px;
				}
			}
		}
		.showelse{
			background: #fff;
			line-height: 40px;
			border-bottom: 1px solid #ccc;
			text-align: center;
			font-size: 16px;
			color: $navColor;
			.otherarrow {
				position: relative;
				&:before,
				&:after{
					content: '';
					@include renderArrow(8px, $navColor);
					position: absolute;
					top: 10px;
					left:10px;
				}
			}
			&:after{
				top: 8px;
				left: 10px;
				border-top-color: #fff;
			}
		}
	}
</style>
<script type="text/javascript">
	import Product from '../components/Product';
	export default {
		components: { Product },
		data() {
			return {
				list:[],
				others: [],
				dataSort: [
					{id: 'price', text: "价格排序"},
					{id: 'sales', text: "销量排序"},
					{id: 'evaluate', text: "好评排序"},
					{id: 'discount', text: "优惠排序"}
				]
			}
		},
		computed: {
			search() {
				return this.$store.state.searchKeyWord;
			},
			// dataList(){
			// 	return this.list.filter(item => {
			// 		return item.title.toUpperCase().includes(this.search.toUpperCase());
			// 	});
			// }
		},
		methods: {
			sendMessage() {
				let { params } = this.$route;
				this.$http
				.get('/data/list', { params })
				.then(({ data }) =>{
					this.list = data.slice(0,3);
					this.others = data.slice(3);
				})
			},
			showElseInfo(){
				this.list = this.list.concat(this.others);
				this.others = [];
			},
			sortList(id){
				this.$http
						.get('/data/sort', {
							params: {
								type: this.$route.params.id,
								order: id,
								desc: 1
							}
						})
						.then(({data} => {
							if(data.length) {
								this.list = data.slice(0, 3);
								this.others = data.slice(3);
							} else {
								this.$alert(data.msg)
								this.list = [];
								this.others = []
							}
						}))
				/*if(id === 'discount') {
					return this.list.sort((a,b) => {
						return (a.originPrice-a.price) - (b.originPrice-b.price);
					});
				};
				 this.list.sort( (a, b) => {
					return a[id] - b[id]; 
				});*/
			}
		},
		created(){
			this.sendMessage();
		},
		watch: {
			$route() {
				this.sendMessage();
			},
			search(value) {
				this.$http
						.get('/data/search', {
							params: {
								search,
								type: this.$route.params.id
							}
						})
						.then(({data}) => {
							if(data.length) {
								this.list = data.slice(0,3);
								this.others = data.slice(3);
							} else {
								alert(data.msg)
								this.list = [];
								this.others = [];
							}
						})
			}
		}
	
	}
</script>