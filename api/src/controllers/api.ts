import { Application } from 'express';

import { students } from '../controllers/students';
import { userRouter } from '../routes/auth';

export const loadApiEndpoints = (app: Application): void => {
  /* app.get('/api', students);

  app.get('/api/hello', (req: Request, res: Response) => {
    return res.status(200).send('Hola Mundo');
  }); */

  app.use('/api/auth', userRouter);
  app.use('/api/students', students);
};
