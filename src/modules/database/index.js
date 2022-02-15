import mongoose from "./mongoose.js";

class DatabaseModule {
    load() {
        mongoose.connect(
            `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(_ => {
            console.log("Successfully connected to MongoDB")
        }).catch(err => {
            console.error("Connection error: ", err)
            process.exit();
        })
    }
}

export default new DatabaseModule();
