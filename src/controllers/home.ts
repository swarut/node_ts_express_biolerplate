import { Request, Response } from "express";

import {User} from "../models/user";
import {getManager} from "typeorm";
import { userInfo } from "os";

export const index = (req: Request, res: Response) => {
    let user = User.createDummy();

    res.render("home", {
        title: "LBV Express-TS boilerplate " + user.name
    });
};
