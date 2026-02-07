import mongoose, { Schema, Document,  model } from "mongoose";

export enum TaskStatus{
    PENDING = "pending",
    COMPLETED = "completed"
}
 interface ITask extends Document  {
    title: string;
    description: string;
    status: TaskStatus;
    userId: mongoose.Types.ObjectId;
}

const TaskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: {
                values: Object.values(TaskStatus),
                message: 'Invalid status: `{VALUE}`. Valid statuses are: ' + Object.values(TaskStatus).join(', ')
            },
            default: TaskStatus.PENDING,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Task = model<ITask>("Task", TaskSchema);

