import path from 'path';
import fs from 'fs';
import url from 'url';
import dotenv from 'dotenv';
import config from './../config/app.config';
import HTTPStatus from 'http-status';


function load(req, res, next) {
	let file = path.resolve(__dirname,'./../lib.js');
	let token =  req.query.t;

	jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
		if(err) {
			res.json(err, HTTPStatus.UNAUTHORIZED);
			return;
		}

		fs.readFile(file, 'utf8', (err, data) => {
			if (err) throw err;
			res.setHeader('content-type', 'text/javascript');
			res.send(data, HTTPStatus.OK);
		});
	});
}

export default { load }