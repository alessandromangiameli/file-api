import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function token(req, res, token) {
	res.send(jwt.sign({test : 'test'}, process.env.SECRET_KEY));
}

export default { token }