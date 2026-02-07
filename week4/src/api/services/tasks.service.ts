import { Task, TaskStatus } from "@/api/models/task.model";

type TaskServiceError = { message: string; code: string; status: number };

export class TaskService {
  // Get all tasks
  async getAll(userId:string): Promise<{ tasks: InstanceType<typeof Task>[] | null; err: TaskServiceError | null }> {
    try {
      const tasks = await Task.find({userId}).exec();
      return { tasks, err: null };
    } catch (error: any) {
      return {
        tasks: null,
        err: {
          message: "Error fetching tasks: " + (error?.message || "Unknown error"),
          code: "GET_TASKS_ERROR",
          status: 500,
        },
      };
    }
  }

  // Get a task by id
  async getById(id: string,userId:string): Promise<{ task: InstanceType<typeof Task> | null; err: TaskServiceError | null }> {
    try {
      const task = await Task.findOne({
        _id:id ,
        userId
      }).exec();
      if (!task) {
        return {
          task: null,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
      return { task, err: null };
    } catch (error: any) {
      return {
        task: null,
        err: {
          message: "Error fetching task: " + (error?.message || "Unknown error"),
          code: "GET_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Add a new task
  async add(task: { title: string; description: string; status?: TaskStatus; userId: string }): Promise<{ task: InstanceType<typeof Task> | null; err: TaskServiceError | null }> {
    try {
      const newTask = new Task({
        ...task,
        status: task.status !== undefined ? task.status : TaskStatus.PENDING,
        userId: task.userId,
      });

      await newTask.save();
      return { task: newTask, err: null };
    } catch (error: any) {
      return {
        task: null,
        err: {
          message: "Error creating task: " + (error?.message || "Unknown error"),
          code: "CREATE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Update a task by id
  async update(
    id: string,
    userId:string,
    update: Partial<{ title: string; description: string; status: TaskStatus }>
  ): Promise<{ task: InstanceType<typeof Task> | null; err: TaskServiceError | null }> {
    try {
      const task = await Task.findOneAndUpdate({_id:id,userId}, update, { new: true }).exec();
      if (!task) {
        return {
          task: null,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
      return { task, err: null };
    } catch (error: any) {
      return {
        task: null,
        err: {
          message: "Error updating task: " + (error?.message || "Unknown error"),
          code: "UPDATE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }

  // Remove/delete a task by id
  async remove(id: string,userId:string): Promise<{ success: boolean; err: TaskServiceError | null }> {
    try {
      const result = await Task.deleteOne({ _id:id,userId }).exec();
      if (result.deletedCount === 1) {
        return { success: true, err: null };
      } else {
        return {
          success: false,
          err: {
            message: "Task not found.",
            code: "TASK_NOT_FOUND",
            status: 404,
          },
        };
      }
    } catch (error: any) {
      return {
        success: false,
        err: {
          message: "Error deleting task: " + (error?.message || "Unknown error"),
          code: "DELETE_TASK_ERROR",
          status: 500,
        },
      };
    }
  }
}
