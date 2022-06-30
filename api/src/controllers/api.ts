import { Application, Request, Response } from "express";

import students from "../../data/students.json";

export const loadApiEndpoints = (app: Application): void => {
	app.get("/api", (req: Request, res: Response) => {
		return res.status(200).send(students);
	});
};
