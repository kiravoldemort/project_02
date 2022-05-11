let path = require('path');

if(process.env.NODE_ENV === 'production'){
	module.exports = {
		outputDir: path.join(process.cwd(), '../static/home'),
		publicPath: '/static/home',
		indexPath: path.join(__dirname, '../views/home.html')
	};
}else{
	let proxyTarget = {
		target: 'http://localhost:3000/'
	}
	module.exports = {
		devServer: {
			proxy: {
				'/data/home': proxyTarget,
				'/data/list': proxyTarget,
				'/data/product': proxyTarget,
				'/data/search': proxyTarget
				'/data/sort': proxyTarget
			}
		}
	};
}