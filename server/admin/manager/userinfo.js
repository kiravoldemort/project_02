let { ERRORS } = require('../../consts');
module.exports = (req, res) => {
	if(req.session.username) {
		res.json( {
			errorno: 0,
			msg: req.session.username
		} )
	}else {
		res.json(ERRORS.notLogin)
	}
}