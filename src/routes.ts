import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import * as apiController from "./controllers/api";

export interface RouteInterface {
    path: string;
    method: string;
    action: Function;
}

export const Routes: RouteInterface[] = [
    {
        path: "/",
        method: "get",
        action: homeController.index
    },
    {
        path: "/login",
        method: "get",
        action: userController.getLogin
    },
    {
        path: "/login",
        method: "post",
        action: userController.postLogin
    },
    {
        path: "/logout",
        method: "get",
        action: userController.logout
    },
    {
        path: "/signup",
        method: "get",
        action: userController.getSignup
    },
    {
        path: "/signup",
        method: "post",
        action: userController.postSignup
    },
    // {
    //     path: "/account",
    //     method: "get",
    //     action: [passportConfig.isAuthenticated, userController.getAccount]
    // },
    {
        path: "/api",
        method: "get",
        action: apiController.getApi
    },
];

