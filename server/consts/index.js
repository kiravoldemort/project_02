module.exports = {
	// 字母大写，横线分割单词
	// http端口号
	HTTP_PORT: 3000,
	// https端口号
	HTTPS_PORT: 3001,
	// 静态化配置
	STATIC: {
		// 静态资源
		'/static/': './static/',
		// 图标静态化
		'/favicon.ico': './favicon.ico',
		'/img/': '/static/img/'
	},
	// 数据地址
	MONGO_URL: 'mongodb://localhost:27017/',
	// 错误提示信息
	ERRORS: {
		// 操作成功
		success: { errno: 0, msg: 'success' },
		// 打开数据库失败
		// 在工作中，errno表示错误类型，是给开发人员看的，msg是给用户看的。会写的模糊一点
		databaseError: { errno: 1, msg: '数据库错误' },
		// 插入数据失败
		collectionInsertError: { errno: 2, msg: '数据库错误'},
		// 没有插入任何一条数据
		collectionInsertNoData: { errno: 3, msg: '数据库错误' },
		// 集合查询错误
		collectionFindError: { errno: 4, msg: '数据库错误' },
		// 没有查询到数据
		collectionFindNoData: { errno: 5, msg: '数据库错误' },
		// 用户名或者密码错误
		loginError: { errno: 6, msg: '用户名或者密码错误' },
		// 尚未登录
		notLogin: { errno: 7, msg: '用户尚未登录，请您登录' },
		// 更新错误
		collectionUpdateError: { errno: 8, msg: '数据库错误' },
		// 没有更新数据
		collectionUpdateNoData: { errno: 9, msg: '数据库错误' },
		// 上传错误
		uploadError: { errno: 10, msg: '上传错误' },
		// 移动文件问题
		moveFileError: { errno: 11, msg: '上传错误' },
		// 删除错误
		collectionRemoveError: { errno: 12, msg: '数据库错误' },
		// 没有删除成功
		collectionRemoveNoData: { errno: 13, msg: '数据库错误' },
	},
	UPLOAD_CACHE_DIR: '/cache/upload/',
	UPLOAD_SAVE_DIR: '/static/upload',
	ADMIN_SHOW_GOODS_NUM: 8,
	HOME_SHOE_GOODS_NUM: 10
}