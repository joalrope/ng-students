import { Request, Response } from 'express';

import data from '../../data/students.json';

export const getStudents = (req: Request, res: Response) => {
  const active = data.filter((student) => student.active == true);

  return res.status(200).send(active);
};

export const getStudent = (req: Request, res: Response) => {
  const { id } = req.params;
  const [student] = data.filter((student) => student.ID == id);

  return res.status(200).send(student);
};
