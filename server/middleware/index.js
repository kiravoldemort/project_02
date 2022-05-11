// 引入express
let express = require('express');
// 引入ejs
let ejs = require('ejs');
// 引入path
let path = require('path');
// 引入session
let session = require('express-session');
// 引入body-parser
let bodyParser = require('body-parser');
// 引入静态化配置
let { STATIC } = require('../consts');

// 暴露接口
module.exports = app => {
	// 更改ejs插值语法的标志
	ejs.delimiter = '$';
	// 设置模板
	app.engine('.html', ejs.__express);
	app.set('view engine', 'ejs')

	// 添加session中间件
	app.use(session({
		// 秘钥
		secret: 'icketang',
		resave: true,
		saveUninitialized: false
	}))

	// 解析请求数据
	app.use(bodyParser.json())

	for (let key in STATIC) {
		// '/static/': './static/',
		// key是匹配的，value是定位的目录
		// console.log(key, STATIC[key])
		// 静态化, process.cwd(), __dirname
		app.use(key, express.static(path.join(process.cwd(), STATIC[key])))
	}
	

	// 静态化, process.cwd(), __dirname
	// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
	// // 图标静态化
	// app.use('/favicon.ico', express.static(path.join(process.cwd(), './favicon.ico')))

	// 为了使用mock数据，将请求静态化
	// app.use('/data/', (req, res, next) => {
	// 	// 在中间件方法中，添加.json拓展名
	// 	// console.log(req.url)
	// 	// 添加拓展名
	// 	// req.url += '.json';
	// 	// req.url = req.url.replace('?', '.json?')
	// 	// 切割路径
	// 	let arr = req.url.split('?');
	// 	// 添加.json
	// 	arr[0] += '.json';
	// 	// 合并路径
	// 	req.url = arr.join('?')
	// 	// 必须执行next方法
	// 	next();
	// }, express.static(path.join(process.cwd(), './static/data/')))
}