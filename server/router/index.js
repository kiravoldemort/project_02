let page = require('../page');

let admin = require('../admin');

let data = require('../data');

module.exports = app => {
	app.use(page)
	app.use(admin)
	app.use(data)
}