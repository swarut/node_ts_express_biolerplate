import { Request, Response } from "express";

import {User} from "../models/user"
import {getManager} from "typeorm";
import { userInfo } from "os";

export const index = (req: Request, res: Response) => {

    let user = new User();
    user.name = "pon";

    getManager()
    .save(user)
    .then(user => {
        console.log("User has been saved. user id is", user.id);
    })
    .catch(error => {
        console.log("error = ", error);
    })

    res.render("home", {
        title: "LBV Express-TS boilerplate"
    });
};
