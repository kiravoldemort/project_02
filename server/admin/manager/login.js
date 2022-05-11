let { collection, end } = require('../../db');

module.exports = (req, res) => {
	collection('manager', res, (colls, db) => {
		colls
			.findOne(req.body, (err, data) => {
				if(err) {
					return end('collectionFindError', res, db);
				}
				if(data) {
					req.session.username = req.body.username;
					return end({
						errno: 0,
						data: req.body.username
					}, res, db)
				}
				end('loginError', res, db);
			})
	})
}