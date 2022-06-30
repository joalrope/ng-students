import cors from 'cors';
import express, { Express } from 'express';
import path from 'path';

import { userRouter } from './routes/auth';
import { studentRouter } from './routes/student';

const app: Express = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/student', studentRouter);

const port = app.get('port');

app.listen(port, () => {
  console.log(`⚡️[server]: Servidor corriendo en modo: ${app.get('env')} en https://localhost:${port}`);
});
