import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    res.render("home", {
        title: "LBV Express-TS boilerplate"
    });
};
