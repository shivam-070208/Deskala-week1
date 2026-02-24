import { Request, Response } from "express";
import { asyncHandler } from "@/lib/async-handler";
import { TaskService } from "@/api/services/tasks.service";
import { ExtendedRequest } from "../types/extended-request";
import { TaskStatus } from "../models/task.model";

const taskService = new TaskService();

const createTaskController = asyncHandler(async (req: Request, res: Response) => {
    const { title, description, status } = req.body;
    const {userId} = (req as ExtendedRequest).user!;
    if (!title || ! description) {
        return res.status(400).json({ message: "Title and user are required fields" });
    }

    const { data:task, err } = await taskService.add({ title, description, status, userId: userId });

    if (err !== null) {
        return res.status(err.status).json({ ...err });
    }
    return res.status(201).json(task);
});

const getTasksController = asyncHandler(async (req: Request, res: Response) => {
    const {userId} = (req as ExtendedRequest).user!;
    const { data : tasks, err } = await taskService.getAll(userId);
    if (err !== null) {
        return res.status(err.status).json({ ...err });
    }
    return res.json(tasks);
});

const getTaskByIdController = asyncHandler(async (req: Request, res: Response) => {
    const taskId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if(!taskId)
        return res.status(400).json({message : "task id must be provided"})
    const {userId} = (req as ExtendedRequest).user!
    const { data:task, err } = await taskService.getById(taskId,userId);
    if (err !== null) {
        return res.status(err.status).json({ ...err });
    }
    return res.json(task);
});

const updateTaskController = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const taskId = Array.isArray(id) ? id[0] : id;
    const {userId} = (req as ExtendedRequest).user!;
    const { title, description, status } = req.body;

    if(!taskId)
            return res.status(400).json({message : "task id must be provided"})
    if (status && !Object.values(TaskStatus).includes((status).toLowerCase())) {
        return res.status(400).json({ message: "Invalid status value. Must be 'pending' or 'completed'." });
    }

    const { data:task, err } = await taskService.update(taskId,userId, { title, description, status });
    if (err !== null) {
        return res.status(err.status).json({ ...err });
    }
    return res.json(task);
});

const deleteTaskController = asyncHandler(async (req: Request, res: Response) => {
    const taskId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const {userId} = (req as ExtendedRequest).user!;
    if(!taskId)
        return res.status(400).json({message : "task id must be provided"})
    const {  err } = await taskService.remove(taskId ,userId);
    if (err !== null) {
        return res.status(err.status).json({ ...err });
    }
    return res.json({ message: "Task deleted successfully" });
});

export {
    createTaskController,
    getTasksController,
    getTaskByIdController,
    updateTaskController,
    deleteTaskController
}