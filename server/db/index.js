// 引入数据库
let { MongoClient, ObjectId } = require('mongodb');
// 数据库地址
let { MONGO_URL, ERRORS } = require('../consts');

/***
 * 封装操作集合的方法
 * @name 		集合名称
 * @res 		响应对象
 * callback 	操作集合的回调函数
 **/
function collection(name, res, callback) {
	// 链接数据库
	MongoClient.connect(MONGO_URL, (err, client) => {
		 var db = client.db("ickt_23_vue");
		// 如果有错误
		if (err) {
			// 提示错误
			// res.json({ errno: 1, msg: '打开数据库失败' })
			// // 关闭数据库
			// db.close();
			// // 不要再执行了
			// return;
			// return end({ errno: 1, msg: '打开数据库失败' }, res, db)
			// return end(ERRORS.databaseError, res, db)

			return end('databaseError', res, db)
		}
		// 操作集合
		callback(db.collection(name), db, res)
	})
}

// 返回数据，并关闭数据库
function end(data, res, db) {
	// 判断data类型
	if (typeof data === 'string') {
		// 返回数据
		res.json(ERRORS[data]);
	} else {
		// 是错误对象
		res.json(data);
	}
	// 关闭数据库
	db.close();
}

// 暴露接口
module.exports = { collection, end,  ObjectId}