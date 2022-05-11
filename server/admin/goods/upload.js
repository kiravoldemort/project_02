let formidable = require("formidable");

let path = require('path');

let fs = require('fs');

let {UPLOAD_CACHE_DIR, UPLOAD_SAVE_DIR, ERRORS} = require('../../consts');

module.export = (req, res) => {
	let form = new formidable().IncomingForm();
	form.uploadDir = path.join(process.cwd(), UPLOAD_CACHE_DIR);
	form.parse(req, (err, fields, files) => {
		if(err) {
			return res.json(ERRORS.uploadError)
		}
		var oldPath = files.file.path;
		let newPath = path.join(
			UPLOAD_SAVE_DIR,
			String(Math.random()).slice(2, 12) +	
			String(Math.random().slice(2, 12)) +
			path.extname(files.files.name)
		)
		fs.rename(oldPath, path.join(process.cwd(), newPath), err => {
			if(err) {
				return res.json(ERRORS.moveFileError)
			}
			res.json({
				errno: 0,
				data: newPath
			})
		})
	})
}