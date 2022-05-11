let { collection, end, ObjectId} = require('../db')

let {HOME_SHOE_GOODS_NUM} = require('../consts')

module.exports = (req, res) => {
	if(req.query.order === 'discount') {
		collection('goods', res, (colls, db) => {
			colls
				.find({
					type: req.query.type
				})
				.toArray((err, data) => {
					if(err) {
						return end('collectionFindError', res, db)
					}
					if(data.length) {
						let result = data.sort((a, b) => {
							return req.query.desc * (a.originPrice - a.price) - req.query.desc * (b.originPrice - b.price)
						})
						.slice(0, HOME_SHOE_GOODS_NUM)
						return end(result, res, db)
					}
					end('collectionFindNoData', res, db)
				})
		})
	}

	collection('goods', res, (colls,db) => {
		colls
			.find({
				type: req.query.type
			})
			.sort( {[req.query.sort]: +req.query.desc || -1} )
			.limit(HOME_SHOE_GOODS_NUM)
			.toArray((err, data) => {
				if(err) {
					return end('collectionFindError', res, db);
				}
				if(data.length) {
					return end(
						data.map(({img, title, sales, price, originPrice, _id}) => ({img, title, sales, price, originPrice, _id}))
						res,
						db
					)
					end('collectionFindNoData', res, db)
				}
			})
	})
}