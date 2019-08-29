import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import passport from "passport";
import "reflect-metadata";
import dotenv from "dotenv";
import * as passportConfig from "../config/passport";

import {RouteInterface, Routes} from "./routes";
import { AdvancedConsoleLogger } from "typeorm";

const app = express();

const configPath = "/config/." + (process.env.NODE_ENV || "development") + ".env";
dotenv.config({path: configPath});

// Express configuration
app.set("port", process.env.PORT || 3003);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

Routes.forEach((route: RouteInterface) => {
    let callback = (request: express.Request, response: express.Response, next: Function) => {
        route.action(request, response);
    };
    switch (route.method) {
        case "get":
            app.get(route.path, callback);
            break;
        case "put":
            app.put(route.path, callback);
            break;
        case "post":
            app.post(route.path, callback);
            break;
        default:
            break;
    }
});

export default app;
