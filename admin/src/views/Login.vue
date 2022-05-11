<template>
	<div class="page-login">
		<div class="login">
			<h1 class="title">请您登录</h1>
			<el-form label-width="100px" :model="data" :rules="rules" ref="login">
				<el-form-item label="用户名" prop="username">
					<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" placeholder="请输入密码" v-model="data.password"></el-input>
				</el-form-item>
				<el-button block type="success" @click="submitData">登录</el-button>
			</el-form>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	.page-login{
		.login {
			background: #fff;
			width: 400px;
			margin: -180px -220px;
			padding: 20px;
			position: absolute;
			left: 50%;
			top: 50%;
			border-radius: 10px;
			box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
			h1 {
				text-align: center;
				margin: 0;
				padding: 5px 0 10px;
				font-size: 20px;
				border-bottom: 1px solid #ccc;
				margin-bottom: 20px;
			}
			.el-button {
				display: block;
				width: 100%;
			}
		}
	}
</style>
<script type="text/javascript">
	import { checkUsername, checkPassword } from '../tools/validator';
	export default {
		data() {
			return {
				data: {},
				rules: {
					username: [
`						{
							trigger: 'blur',
							validator: checkUsername
						}`
					],
					password: [
						{
							trigger: 'blur',
							validator: checkPassword
						}
					]
				}
			}
		},
		methods: {
			submitData() {
				this.$refs.login
					.validate(valid => {
						this.$http
					 	 	  .post('/admin/login', this.data)
					 	 	  .then( {data} => {
					 	 	  	if(data.errno === 0){
					 	 	  		this.$store.commit('updateUsername', data.data);	
					 	 	  	} else {
					 	 	  		this.$alert(data.msg)
					 	 	  	}
					 })
				})
			}
		}
	}
</script>