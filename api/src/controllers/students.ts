import { Request, Response } from "express";

import data from "../../data/students.json";

export const getStudents = (req: Request, res: Response) => {
	const active = data.filter((student) => student.active == true);

	return res.status(200).send(active);
};
