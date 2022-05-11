let { Router } = require('express');

let managerLogin = require('./manager/login');

let userinfo = require('./manager/userinfo');

let updateUserInfo = require('./manager/updateUserinfo');

let createGoods = require('./goods/create');

let uploadGoods = require('./goods/upload');

let goodList = require('./goods/list');

let deleteGoods = require('./goods/delete');

let goodsDetail = require('./goods/detail');

let updateGoods = require('./goods/update');

let router = new Router();

module.exports = router
		.get('/admin/userinfo', userinfo)
		.post('/admin/login', managerLogin)
		.post('/admin/manager/update', updateUserInfo)
		.post('/admin/goods/create', createGoods)
		.post('/admin/goods/upload', uploadGoods)
		.post('/admin/goods/list', goodList)
		.post('/admin/goods/delete', deleteGoods)
		.post('/admin/goods/detail', goodsDetail)
		.post('/admin/goods/update', updateGoods)