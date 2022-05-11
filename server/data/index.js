let { Router } = require('express');

let home = require('./home');

let list = require('./list');

let product = require('./product');

let search = require('./search');

let sort = require('./sort');

let router = new Router();

module.exports = router
			.get('/data/home', home)
			.get('/data/list', list)
			.get('/data/product', product)
			.get('/data/search', search)
			.get('/data/sort', sort)