import { Request, Response } from 'express';

import data from '../../data/students.json';

export const getStudents = (req: Request, res: Response) => {
  const active = data.filter((student) => student.active == true);

  return res.status(200).send(active);
};

export const getStudentsByPage = (req: Request, res: Response) => {
  const { page, limit } = req.params;

  const page_ = Number(page);
  const limit_ = Number(limit);

  console.log({ page_, limit_ });

  const active = data.filter((student) => student.active == true);

  const students = active.slice((page_ - 1) * limit_, page_ * limit_);

  return res.status(200).send({ records: active.length, students });
};

export const getStudent = (req: Request, res: Response) => {
  const { id } = req.params;
  const [student] = data.filter((student) => student.ID == id);

  return res.status(200).send(student);
};
