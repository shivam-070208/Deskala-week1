import express from "express";
import type { Express } from "express";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";
import authRouter from "@/api/routes/auth.router";
import tasksRouter from "@/api/routes/tasks.router";
const app: Express = express();

//* middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World");
});

app.use("/api/auth",authRouter);
app.use("/api/tasks",tasksRouter)
export default app;
