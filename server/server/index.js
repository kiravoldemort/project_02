// 引入path
let path = require('path');
// 引入服务
let http = require('http');
// 引入https服务
let https = require('https');
// 引入fs
let fs = require('fs');
// 引入配置
// let consts = require('../consts');
// // 解构数据
// let { HTTP_PORT, HTTPS_PORT } = consts;
// 合并一步
let { HTTP_PORT, HTTPS_PORT } = require('../consts');


// 读取秘钥文件
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// 暴露接口
module.exports = app => {
	// console.log(process.argv)
	// 定义端口号
	let httpPort = +process.argv[2] || HTTP_PORT;
	// 如果传递了http端口号，没有传递https端口号，https端口号在http端口号基础上加1
	let httpsPort = +process.argv[3] || (process.argv[2] && +process.argv[2] + 1) || HTTPS_PORT;
	// let httpsPort = +process.argv[3] || (+process.argv[2] ?  +process.argv[2] + 1 : 3001) ||3001;
	// 启动服务
	http
		.createServer(app)
		// 监听端口号
		.listen(httpPort, res => console.log('http port listen at ' + httpPort));
	https
		.createServer({ key, cert }, app)
		// 监听端口号
		.listen(httpsPort, res => console.log('https port listen at ' + httpsPort))
}
