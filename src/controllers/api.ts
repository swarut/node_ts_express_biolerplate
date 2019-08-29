import { Response, Request, NextFunction } from "express";

export const getApi = (req: Request, res: Response) => {
    res.render("api/index", {
        title: "API Examples"
    });
};

export const getSample = (req: Request, res: Response) => {

    res.send({title: "sample"});
};
