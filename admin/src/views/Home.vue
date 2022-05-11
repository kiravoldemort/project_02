<template>
	<el-container class="page-home">
		<el-header>
			<router-link to="/" tag="h1">爱创课堂后台管理系统</router-link>
			<div>
				<span>您好 <strong>{{$store.state.username}}</strong> 欢迎回来 !</span>
				<a href="/admin/logout">退出</a>
			</div>
		</el-header>
		<el-container>
			<el-aside width="250px">
				<el-menu :router="true">
					<el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>{{item.title}}</span>
						</template>
						<el-menu-item v-for="(childItem, childIndex) in item.children" :key=" childIndex" :index="childItem.link">
							{{childItem.title}}
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-link></router-link>
			</el-main>
		</el-container>
	</el-container>
</template>
<style type="text/css">
	.el-header,
	.el-aside,
	.el-main {
		background: #fff;
	}
	.el-header {
		margin-bottom: 10px;
		display: flex;
		h1 {
			flex: 1;
		}
		div {
			padding-top: 30px;
		}
	}
	.el-main {
		margin-left: 10px;
	}
	&.el-container,
	.el-container {
		height: 100%;
	}
	.page-title {
		font-size: 24px;
		padding: 0 10px 15px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 30px;
		font-weight: normal;
		margin-top: 15px;
	}
	.el-input,
	.el-textarea {
		width: 40%;
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				menu: [
					{
						title: '商品模块',
						children: [
							{ title: '创建商品', link: '/goods/create'},
							{ title: '商品列表', link: '/goods/list/1'},
						]
					},
					{
						title: '首页模块',
						children: [
							{ title: '首页广告', link: '/home/ads' },
							{ title: '商品分类', link: '/home/types' },
						]
					},
					{
						title: '用户模块',
						children: [
							{ title: '创建用户', link: '/user/create' },
							{ title: '用户列表', link: '/user/list/1' },
						]	
					}
				]
			}
		}
	}
</script>