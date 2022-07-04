import { Router } from 'express';

import { getStudent, getStudents, getStudentsByPage } from '../controllers/students';

export const studentRouter = Router();

studentRouter.get('/', [], getStudents);
studentRouter.get('/page/:page/limit/:limit', [], getStudentsByPage);
studentRouter.get('/:id', [], getStudent);
