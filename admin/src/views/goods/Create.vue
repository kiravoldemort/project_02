<template>
		<h1 class="page-title">{{pageTitle}}</h1>
		<el-form label-width="200px" :model="data" :rules="rules" ref="goods">
			<el-form-item label="商品标题" prop="title">
				<el-input placeholder="请输入商品标题" v-model="data.title"></el-input>
			</el-form-item>
			<el-form-item label="商品描述" prop="description">
				<el-input type="textarea" placeholder="请输入商品描述" v-model="data.description"></el-input>
			</el-form-item>
			<el-form-item label="商品价格" prop="price">
				<el-input type="number" placeholder="请输入商品价格" v-model="data.price"></el-input>
			</el-form-item>
			<el-form-item label="商品原价" prop="originPrice">
				<el-input type="number" placeholder="请输入商品原价" v-model="data.originPrice"></el-input>
			</el-form-item>
			<el-form-item label="商品评分" prop="evaluate">
				<el-rate allow-half show-score v-model="data.evaluate"></el-rate>
			</el-form-item>
			<el-form-item label="商品分类" prop="type">
				<el-select placeholder="请输入商品分类" v-model="data.type">
					<el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="商品销量" prop="sales">
				<el-input type="number" placeholder="请输入商品销量" v-model="data.sales"></el-input>
			</el-form-item>
			<el-form-item label="商品店名" prop="storeName">
				<el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
			</el-form-item>
			<el-form-item label="商品地址" prop="storeAddress">
				<el-input placeholder="请输入商品地址" v-model="data.storeAddress"></el-input>
			</el-form-item>
			<el-form-item label="商品分店" prop="storeNum">
				<el-input type="number" placeholder="请输入商品分店" v-model="data.storeNum"></el-input>
			</el-form-item>
			<el-form-item label="商品图片" prop="img">
				<el-upload 
					action="/admin/goods/upload"
					:show-file-list="false"
					:on-success="uploadSuccess"
					:on-fail="uploadFail"
				>
				<el-button type="primary">上传</el-button>
				<span class="upload-tips" slot="tip">请上传图片</span>
				</el-upload>
			</el-form-item>
			<el-form-item label="商品内容" prop="content">
				<quill-editor v-model="data.content"></quill-editor>
			</el-form-item>
			<el-form-item label="商品内容" prop="content">
				<el-button type="success" @click="submitData">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script type="text/javascript">
	import { checkNotEmpty } from '../../tools/validator';
	export default {
		data() {
			let data = {
				img: '',
				title: '',
				description: '',
				sales: 0,
				price: 0,
				originPrice: 0,
				evaluate: 0,
				storeName: '',
				storeAddress: '',
				storeNum: 0,
				content: '',
				type: ''
			}
			let rules = {};
			for(let key in data) {
				rules[key] = [{ trigger: 'blur', validator: checkNotEmpty }]
			}

			return {
				pageTitle: '创建商品',
				data,
				rules,
				url: '/admin/goods/create',
				types: [
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
			}
		}, 
		methods: {
			uploadSuccess({ errno, data, msg}) {
				if(errno === 0) {
					this.data.img = data;
				} else {
					this.$alert(msg)
				}
			},
			uploadFail() {

			},
			submitData() {
				this.$ref.goods.validate(valid => {
					if(valid) {
						this.$http
								.post(this.url, this.data)
								.then(({data}) => {
									if(data.errno === 0) {
										this.router.push('/goods/list/1');
									} else{
										this.$alert(data.msg)
									}
								})
					}
				})
			}
		}
	}
</script>