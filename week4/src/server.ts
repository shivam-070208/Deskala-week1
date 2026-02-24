import "dotenv/config";
import connectDb from "@/config/db";
import app from "@/app";
import { PORT } from "@/config/env.config";





connectDb()
    .then(() => {
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err.message)
                process.exit(0)
            }
            console.log(`server started to http://localhost:${PORT}`)
        })
    })