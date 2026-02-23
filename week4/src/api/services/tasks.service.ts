import { Task, TaskStatus } from "@/api/models/task.model";

type TaskServiceError = { message: string; code: string; status: number };
type TaskServiceResult<T> =
  | { data: T; err: null }
  | { data: null; err: TaskServiceError };

export class TaskService {
  // Get all tasks
  async getAll(
    userId: string,
  ): Promise<TaskServiceResult<InstanceType<typeof Task>[]>> {
    try {
      const tasks = await Task.find({ userId }).exec();
      return { data: tasks, err: null };
    } catch (err: any) {
      return {
        data: null,
        err: {
          message:
            "Error fetching tasks: " + (err?.message || "Unknown error"),
          code: "GET_TASKS_ERROR",
          status: 500,
        },
      };
    }
  }

  // Get a task by id
  async getById(
    id: string,
    userId: string,
  ): Promise<TaskServiceResult<InstanceType<typeof Task>>> {
    try {
      const task = await Task.findOne({
        _id: id,
        userId,
      }).exec();
      if (!task) {
        return {
          data: null,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
      return { data: task, err: null };
    } catch (error: any) {
      return {
        data: null,
        err: {
          message:
            "Error fetching task: " + (error?.message || "Unknown error"),
          code: "GET_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Add a new task
  async add(task: {
    title: string;
    description: string;
    status?: TaskStatus;
    userId: string;
  }): Promise<TaskServiceResult<InstanceType<typeof Task>>> {
    try {
      const newTask = new Task({
        ...task,
        status: task.status !== undefined ? task.status : TaskStatus.PENDING,
        userId: task.userId,
      });

      await newTask.save();
      return { data: newTask, err: null };
    } catch (error: any) {
      return {
        data: null,
        err: {
          message:
            "Error creating task: " + (error?.message || "Unknown error"),
          code: "CREATE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Update a task by id
  async update(
    id: string,
    userId: string,
    update: Partial<{ title: string; description: string; status: TaskStatus }>,
  ): Promise<TaskServiceResult<InstanceType<typeof Task>>> {
    try {
      const task = await Task.findOneAndUpdate({ _id: id, userId }, update, {
        new: true,
      }).exec();
      if (!task) {
        return {
          data: null,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
      return { data: task, err: null };
    } catch (error: any) {
      return {
        data: null,
        err: {
          message:
            "Error updating task: " + (error?.message || "Unknown error"),
          code: "UPDATE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Remove/delete a task by id
  async remove(
    id: string,
    userId: string,
  ): Promise<TaskServiceResult<boolean>> {
    try {
      const result = await Task.deleteOne({ _id: id, userId }).exec();
      if (result.deletedCount === 1) {
        return { data: true, err: null };
      } else {
        return {
          data: null,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
    } catch (error: any) {
      return {
        data: null,
        err: {
          message:
            "Error deleting task: " + (error?.message || "Unknown error"),
          code: "DELETE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }
}
