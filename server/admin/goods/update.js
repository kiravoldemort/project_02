let {collection, end,  ObjectId} = require('../../db')

module.exports = (req, res) => {
	let id = req.body._id;
	delete req.body._id;
	collection('goods', res, (colls, db) => {
		colls
			.updateOne({_id: ObjectId(id)}, req.body, (err, data) => {
			if(err) {
				return end('collectionUpdateError', res, db)
			}
			if(data.result.n > 0 ) {
				return end('success', res, db)
			}
			return end('collectionUpdateNoData', res, db)
		})
	})
}