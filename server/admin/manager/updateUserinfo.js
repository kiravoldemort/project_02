let { ERRORS } =require('../../consts');

let { collection, end } = require('../../db');

module.exports = function(req, res) {
	if(req.session.username) {
		collection('manager', res, (colls, db) => {
			colls
				.updateOne(
					{username: req.session.username},
					req.body,
					(err, data) => {
						if(err) {
							return end('collectionUpdateError', res, db)
						}
						if(data.result.n > 0) {
							delete req.session.username;
							return end('success', res, db);
						}
						end('collectionUpdateNoData', res,db)
					}
				)
		}) 
	}else {
		res.json(ERRORS.notLogin)
	}
}