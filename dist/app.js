"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
const homeController = __importStar(require("./controllers/home"));
const userController = __importStar(require("./controllers/user"));
const apiController = __importStar(require("./controllers/api"));
const passportConfig = __importStar(require("./config/passport"));
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3003);
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   store: new MongoStore({
//       url: mongoUrl,
//       autoReconnect: true
//   })
// }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// app.use(flash());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
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
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
app.get("/", homeController.index);
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);
app.get("/logout", userController.logout);
app.get("/signup", userController.getSignup);
app.post("/signup", userController.postSignup);
app.get("/account", passportConfig.isAuthenticated, userController.getAccount);
app.get("/api", apiController.getApi);
exports.default = app;
//# sourceMappingURL=app.js.map