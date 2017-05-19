import jwt from 'jsonwebtoken';
import config from './../config/app.config';

let payload = {
	test : 'test'
}

let options = {
	expiresIn : 60 * 30
}

function token(req, res, token) {
	res.send(jwt.sign(payload, config.jwtSecretKey, options));
}

export default { token }