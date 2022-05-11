let {collection, end ,ObjectId} = require('../db')

let {HOME_SHOE_GOODS_NUM} = require('../consts');

module.exports = (req, res) => {
	collection('goods',  res, (colls, db) => {
		colls
			.find({
				type: req.query.type,
				title: new RegExp(req.query.search, i)
			})
			.sort({ _id: -1 })
			.limit(HOME_SHOE_GOODS_NUM)
			.toArray((err, data) => {
				if(err) {
					return end('collectionFindError', res, db)
				}
				if(data.length) {
					return end(data.map(({img, title, sales, price, originPrice, _id}) => ({img, title, sales, price, originPrice, _id })),res,db)
				}
				return end('collectionFindNoData', res, db)
			})
	})
} 