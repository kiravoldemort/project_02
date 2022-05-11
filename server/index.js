// 引入express
let express = require('express');

// 引入server
let server = require('./server');
// 引入中间件
let middleware = require('./middleware');
// 引入路由
let router = require('./router');


// 创建应用程序
let app = express();

// 使用服务模块
server(app)
// 添加中间件
middleware(app)
// 安装路由
router(app);





// // 接口
// app.get('/create', (req, res) => {
	// //引入数据库模块
	// let mongodb = require('mongodb');
	// // 获取客户端
	// let MongoClient = mongodb.MongoClient;
	// // 定义url
	// let mongoUrl = 'mongodb://localhost:27017/ickt_23_vue';
	// // console.log(MongoClient)
	// // 打开数据库
	// MongoClient.connect(mongoUrl, (err, client) => {
	// 	// console.log(err, db)
	// 	 var db = client.db("ickt_23_vue");
	// 	// 判断错误
	// 	if (err) {
	// 		// 关闭数据库，提示用户
	// 		// res.json()
	// 		return db.close()
	// 	}
	// 	// 操作数据
	// 	db.collection('test')
	// 		// 插入一条数据
	// 		.insertOne({ title: 'caonimabi1' })
	// })

	// let { collection, end } = require('./db');
	// // 我们希望像下面这样操作数据库
	// 	collection('test', res, (colls, db) => {
	// 		colls.insertOne({ title: 'wotama' }, (err, data) => {
	// 			console.log("2222", data);
	// 			// 如果有错误
	// 			if (err) {
	// 				// 提示用户
	// 				// res.json({ errno: 2, msg: '插入数据错误' })
	// 				// // 关闭数据库
	// 				// db.close();
	// 				// // 停止执行
	// 				// return ;
	// 				// return end({ errno: 2, msg: '插入数据错误'} , res, db)
	// 				return end('collectionInsertError' , res, db)
	// 			}
	// 			// 如果有数据
	// 			// if (data.result.n > 0) {
	// 			// 	// 操作成功
	// 			// 	// res.json({ errno: 0, msg: 'success' })
	// 			// 	// db.close();
	// 			// 	// return ;
	// 			// 	// return end({ errno: 0, msg: 'success' }, res, db)
	// 			// 	return end('success', res, db)
	// 			// }
	// 			// 没有数据插入
	// 			// res.json({ errno: 3, msg: '没有插入数据' })
	// 			// // 关闭数据库
	// 			// db.close();
	// 			// end({ errno: 3, msg: '没有插入数据' }, res, db)
	// 			end('collectionInsertNoData', res, db)
	// 		})
	// 	})

	// 	 res.json('success')
	// });





// 引入ejs
// let ejs = require('ejs');
// // 引入path
// let path = require('path');
// // 引入服务
// let http = require('http');
// // 引入https服务
// let https = require('https');
// // 引入fs
// let fs = require('fs');

// // 创建应用程序
// let app = express();

// // 更改ejs插值语法的标志
// ejs.delimiter = '$';
// // 设置模板
// app.engine('.html', ejs.__express);
// app.set('view engine', 'ejs')

// // 静态化, process.cwd(), __dirname
// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
// // 图标静态化
// app.use('/favicon.ico', express.static(path.join(process.cwd(), './favicon.ico')))

// // 为了使用mock数据，将请求静态化
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

// 首页路由
// app.get('/', (req, res) => {
// 	// 渲染html文件
// 	// res.render('index.html')
// 	res.render('home.html', {
// 		// 数据
// 		title: '爱创课堂'
// 	})
// })

// // 定义路由第二种方式：中间件的方式
// // 创建路由中间件
// let router = new express.Router();
// // 配置路由
// router.get('/', (req, res) => {
// 	// 渲染html文件
// 	// res.render('index.html')
// 	res.render('home.html', {
// 		// 数据
// 		title: '爱创课堂'
// 	})
// })
// router.get('/demo', (req, res) => {
// 	res.json('demo')
// })
// // 第三步 安装路由
// app.use(router)



// // 定义端口号
// let httpPort = 3000;
// let httpsPort = 3001;
// // 读取秘钥文件
// let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
// let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// // 启动服务
// http
// 	.createServer(app)
// 	// 监听端口号
// 	.listen(httpPort, res => console.log('http port listen at ' + httpPort));
// https
// 	.createServer({ key, cert }, app)
// 	// 监听端口号
// 	.listen(httpsPort, res => console.log('https port listen at ' + httpsPort))
