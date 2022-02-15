import cors from 'cors'
import multer from 'multer'
import express from 'express'

class HTTPServer {
    load() {
        this.app = express()

        const corsOptions = {
            origin: '*'
            // origin: `http://${host}:${port}`
        };
        const upload = multer({ storage: multer.memoryStorage() })

        this.app.use(upload.any())
        this.app.use(express.json())
        this.app.use(cors(corsOptions))
        this.app.use(express.urlencoded({ extended: true }));

        const port = process.env.PORT || 3333
        const host = process.env.HOST || "0.0.0.0"
        this.app.listen(port, host, () => {
            console.log(`Nocture listening at http://${host}:${port}`)
        })

        console.log("HTTP loaded!")
    }

    registerRoute(group, routes) {
        this.app.use(group, routes)
    }
}

export default new HTTPServer();
