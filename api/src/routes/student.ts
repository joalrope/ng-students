import { Router } from 'express';

import { getStudent, getStudents } from '../controllers/students';

export const studentRouter = Router();

studentRouter.get('/', [], getStudents);
studentRouter.get('/:id', [], getStudent);
