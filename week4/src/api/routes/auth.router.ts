import type { Router } from "express";
import express from "express";
import { registerController, loginController } from "@/api/controllers/auth.controller";
const authRouter: Router = express.Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);

export default authRouter;