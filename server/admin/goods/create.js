let {collection, end} = require('../../db');
let {ERRORS} = require('../../consts');

module.export = (req, res) => {
	collection('goods', res, (colls, db) => {
		colls.insertOne(req.body, (err, data) =>  {
			if(err) {
				return end(ERRORS.collectionUpdateError, res, db)
			}
			if(data.result.n > 0) {
				return end('success', res, db)
			}
			end('collectionInsertNoData', res, db)
		})
	})
}