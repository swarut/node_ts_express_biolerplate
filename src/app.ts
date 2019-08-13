import express from "express";
import compression from "compression";
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import flash from "express-flash";
import path from "path";
import passport from "passport";
import bluebird from "bluebird";

import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import * as apiController from "./controllers/api";

import * as passportConfig from "./config/passport";

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3003);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   store: new MongoStore({
//       url: mongoUrl,
//       autoReconnect: true
//   })
// }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    // if (!req.user && req.path !== "/login" && req.path !== "/signup" && !req.path.match(/^\/auth/) && !req.path.match(/\./)) {
    //     console.log("-=1");
    //     console.log(req.session);
    //     req.session.returnTo = req.path;
    // }
    // else if (req.user && req.path == "/account") {
    //     console.log("-=2");
    //     console.log(req.session);
    //     req.session.returnTo = req.path;
    // }
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

app.get("/", homeController.index);
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);
app.get("/logout", userController.logout);
app.get("/signup", userController.getSignup);
app.post("/signup", userController.postSignup);
app.get("/account", passportConfig.isAuthenticated, userController.getAccount);

app.get("/api", apiController.getApi);

export default app;
