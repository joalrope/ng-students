import { Request, Response } from 'express';

import data from '../../data/students.json';

export const getStudents = (req: Request, res: Response) => {
  return res.status(200).send(data);
};
