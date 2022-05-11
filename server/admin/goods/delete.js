let { collection, end, ObjectId } = require('../../db')

module.exports = (req, res) => {
	collection('goods', res, (colls, db) => {
		colls
			.removeOne({ _id:ObjectId(req.body.id)}, (err, data) =>{
				if(err) {
					return end('collectionRemoveError', res, db)
				}
				if(data.result.n > 0) {
					return end('success', res, db)
				}
				end('collectionRemoveNoData', res, db)
			}
	})
}