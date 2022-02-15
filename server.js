import { dirname } from "path";
import Env from "./src/modules/env/index.js";
import Utils from "./src/modules/utils/index.js";
import HTTPServer from "./src/modules/http/index.js";
import DatabaseModule from "./src/modules/database/index.js";

class Nocture {
    start(appIndexPath) {
        Utils.load(dirname(appIndexPath))

        Env.load()
        HTTPServer.load()
        DatabaseModule.load()
    }
}

export default new Nocture();
