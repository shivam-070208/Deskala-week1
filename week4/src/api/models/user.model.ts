import  { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt";
 interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

UserSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export const User = model<IUser>("User", UserSchema);
