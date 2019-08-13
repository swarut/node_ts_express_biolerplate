"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const lodash_1 = __importDefault(require("lodash"));
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.serializeUser((user, done) => {
    done(undefined, user.id);
});
passport_1.default.deserializeUser((id, done) => {
});
/**
 * Sign in using Email and Password.
 */
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
}));
/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};
/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split("/").slice(-1)[0];
    if (lodash_1.default.find(req.user.tokens, { kind: provider })) {
        next();
    }
    else {
        res.redirect(`/auth/${provider}`);
    }
};
//# sourceMappingURL=passport.js.map