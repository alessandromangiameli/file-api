import express from 'express';
import fileRouter from './routes/file.routes';

const app = express();

app.use('/file', fileRouter);

const server = app.listen(3000, () => {
	console.log('server running at ' + server.address().port);
});