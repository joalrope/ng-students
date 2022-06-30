import { Router } from 'express';

import { getStudents } from '../controllers/students';

export const studentRouter = Router();

studentRouter.get('/', [], getStudents);
