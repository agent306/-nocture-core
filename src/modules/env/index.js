import dotenv from 'dotenv'
import Utils from "../utils/index.js"

class Env {
    load() {
        const envPath = Utils.getAppRoot('.env');
        if (!Utils.checkFileExistsSync(envPath)) {
            console.error(".env file missing from root. App will shutdown")
            process.exit();
        }

        dotenv.config({
            path: Utils.getAppRoot('.env')
        })

        console.log("ENV loaded!")
    }

    get(name, defaultValue) {
        return process.env[name] || defaultValue || null
    }
}

export default new Env();
