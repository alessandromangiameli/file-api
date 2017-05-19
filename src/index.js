import express from 'express';
import fileRouter from './routes/file.routes';
import authRouter from './routes/auth.routes';

const app = express();

app.use('/file', fileRouter);
app.use('/auth', authRouter);

const server = app.listen(3000, () => {
	console.log('server running at ' + server.address().port);
});