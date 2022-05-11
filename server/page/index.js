let { Router } = require('express');

let home = require('./home');

let admin = require('./admin');

let router = new Router();

module.exports = router
     .get('/', home)
     .get('/admin', admin)