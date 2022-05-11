let { collection, end } = require('../../db');

let {ADMIN_SHOW_GOODS_NUM} = require('../../consts');

module.exports = (req, res) => {
	let page = req.query.page -1;
	page = page < 0 ?0: page;
	collection('goods', res, (colls, db) => {
		colls
			.find()
			.skip(page*ADMIN_SHOW_GOODS_NUM)
			.limit(ADMIN_SHOW_GOODS_NUM)
			.sort({_id:-1})
			.toArray((err, data) => {
				if(err) {
					return end('collectionFindError', res, db)
				}
				if(data.length) {
					return end({erron: 0, data}, res, db)
				}
				end('collectionFindNoData', res, db)
			})
	})
}