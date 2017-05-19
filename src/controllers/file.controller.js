import path from 'path';
import fs from 'fs';
import url from 'url';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();


function load(req, res, next) {
	let file = path.resolve(__dirname,'./../lib.js');
	let token =  req.query.t;

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if(err) {
			res.json(err);
			return;
		}

		fs.readFile(file, 'utf8', (err, data) => {
			if (err) throw err;
			res.setHeader('content-type', 'text/javascript');
			res.send(data);
		});
	});
}

export default { load }