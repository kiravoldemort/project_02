export function checkUsername(field, value, callback) {
		if(!value) {
			return callback(new Error('用户名是必填的'))
		}
		if(!/^\w{4,8}$/.test(value)) {
			return callback(new Error('用户名必须是4-8位'));
		}
		callback();
}

export function checkPassword(field, value, callback) {
	if(!value) {
		return callback(new Error('密码是必填的'))
	}
	if(!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		return callback(new Error('密码是2-6位的'))
	}
	 callback();
}

export function repeatPassword(password, title, field ,value, callback) {
	if(!value) {
		return callback(new Error('重复${title}不能为空'))
	}
	if(password !== value) {
		return callback(new Error('${title}不一致'))
	}
	callback();
}
export function checkNotEmpty(field, value, callback) {
	if(!value) {
		return callback(new Error('不能为空'))
	}
	callback();
}