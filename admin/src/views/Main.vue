<template>
	<div class="page-main">
		<h1 class="page-title">修改密码</h1>
		<el-form label-width="200px" :model="data" :rules="rules" ref="main">
			<el-form-item label="用户名" props="username">
				<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
			</el-form-item>
			<el-form-item label="重复密码" prop="repeat">
				<el-input placeholder="请重复输入密码" type="password" v-model="data.repeat"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="success" @click="submitData">提交</el-button>
				<el-button type="warning" @click="resetData">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script type="text/javascript">
	import {checkUsername, checkPassword, repeatPassword} = '../tools/validator';
	export default {
		data() {
			return {
				data: {},
				rules: {
					username: [{trigger: 'blur', validator: checkUsername}],
					password: [{trigger:'blur', validator: checkPassword}],
					repeat: [{trigger: 'blur', validator: (...arg) => {
						repeatPassword(this.data.password, '密码', ...arg)
					}}]
				}
			}
		},
		methods: {
			submitData() {
				this.$refs.main.validate(valid => {
					if(valid){
						let {username, password} = this.data;
						this.$http
							.post('/admin/manager/update', {username, password})
							.then( ({data}) => {
								if(data.errno === 0) {
									window.location.reload();
								}else {
									this.$alert(data.msg)
								}S
							})
					}
				})

			},
			resetData() {
				this.$refs.main.resetFields();
			}
		}
	}
</script>