import errorHandler from "errorhandler";
import {createConnection, Connection} from "typeorm";
import {User} from "./models/user";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "wsurapat",
    password: "",
    database: "boiler_dev",
    entities: [
        User
    ],
    synchronize: true
}).then( async connection => {
    const server = app.listen(app.get("port"), () => {
        console.log(
            "  App is running at http://localhost:%d in %s mode",
            app.get("port"),
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    });
});

// export default server;
