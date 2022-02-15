import fs from "fs"
import { join } from "path";

class Utils {
    load(appRoot) {
        this.appDir = appRoot
        console.log("Utils loaded!")
    }

    checkFileExistsSync(filepath) {
        let flag = true;
        try{
            fs.accessSync(filepath, fs.constants.F_OK);
        }catch(e){
            flag = false;
        }
        return flag;
    }

    getAppRoot(fileName) {
        return join(this.appDir, fileName);
    }
}

export default new Utils();
