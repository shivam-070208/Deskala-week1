import express from "express";
import type { Express } from "express";
import type { Request, Response } from "express";
import {
  serve as swaggerServe,
  setup as swaggerSetup,
} from "swagger-ui-express";
import swaggerConfig from "@/config/swagger";
import cookieParser from "cookie-parser";
import authRouter from "@/api/routes/auth.router";
import tasksRouter from "@/api/routes/tasks.router";

const app: Express = express();

// ==================== MIDDLEWARES ====================

// * Swagger UI - Available at /api-docs
app.use("/api-docs", swaggerServe, swaggerSetup(swaggerConfig));

// * Body parser & URL encoder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Cookie parser
app.use(cookieParser());

// ==================== ROUTES ====================

// * Health check route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    docs: "Visit http://localhost:3000/api-docs for API documentation",
  });
});

// * Auth routes
app.use("/api/auth", authRouter);

// * Tasks routes
app.use("/api/tasks", tasksRouter);

export default app;
