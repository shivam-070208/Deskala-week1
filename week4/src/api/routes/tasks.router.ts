import type {Router} from "express";
import express from "express";
import {
    createTaskController,
    getTasksController,
    getTaskByIdController,
    updateTaskController,
    deleteTaskController
} from "@/api/controllers/tasks.controller"
import { isAuth } from "@/api/middlewares/isauth.middleware";
const tasksRouter :Router = express.Router();

tasksRouter.use(isAuth);

tasksRouter.route("/")
    .post(createTaskController)
    .get(getTasksController);

tasksRouter.route("/:id")
    .get(getTaskByIdController)
    .put(updateTaskController)  
    .delete(deleteTaskController)

export default tasksRouter;