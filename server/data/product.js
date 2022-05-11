let {collection, end, ObjectId} = require('../db')

module.exports = (req, res) => {
	collection('goods', res, (colls, db)=> {
		colls
			.findOne({_id:ObjectId(req.query.id)}, (err, data) => {
				if(err) {
					return end('collectionFindError' , res, db)
				}
				if(data) {
					return end(data, res, db)
				}
				end('collectionFindNoData', res, db)
			})
	})
}