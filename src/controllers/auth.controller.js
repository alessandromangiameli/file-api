import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

let payload = {
	test : 'test'
}

let options = {
	expiresIn : 60 * 30
}

function token(req, res, token) {
	res.send(jwt.sign(payload, process.env.SECRET_KEY, options));
}

export default { token }