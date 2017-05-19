import path from 'path';
import fs from 'fs';
import url from 'url';


function load(req, res, next) {
	let file = path.resolve(__dirname,'./../lib.js');
	let token =  req.query.t;

	if(token === undefined) {
		res.send('forbidden');
	} else {
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) throw err;
			res.setHeader('content-type', 'text/javascript');
			res.send(data);
		});
	}
}

export default { load }