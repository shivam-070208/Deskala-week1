import { User } from "@/api/models/user.model";

type UserServiceError = { message: string; code: string; status: number };

export class UserService {
    
    async createNewUser(
        name: string,
        email: string,
        password: string
    ): Promise<{ user: InstanceType<typeof User> | null; err: UserServiceError | null }> {
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return {
                    user: null,
                    err: {
                        message: "A user with this email already exists.",
                        code: "USER_EXISTS",
                        status: 409
                    }
                };
            }
            const newuser = new User({
                name,
                email,
                password
            });
            await newuser.save();
            return { user: newuser, err: null };
        } catch (error: any) {
            return {
                user: null,
                err: {
                    message: "Error creating user: " + (error?.message || "Unknown error"),
                    code: "CREATE_USER_ERROR",
                    status: 500
                }
            };
        }
    }

    async getUserById(userId: string): Promise<{ user: InstanceType<typeof User> | null; err: UserServiceError | null }> {
        try {
            const user = await User.findById(userId);
            if (!user) {
                return {
                    user: null,
                    err: { 
                        message: "User not found.",
                        code: "USER_NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { user, err: null };
        } catch (error: any) {
            return {
                user: null,
                err: {
                    message: "Error fetching user: " + (error?.message || "Unknown error"),
                    code: "GET_USER_ERROR",
                    status: 500
                }
            };
        }
    }
    async getUserByEmail(email: string): Promise<{ user: InstanceType<typeof User> | null; err: UserServiceError | null }> {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return {
                    user: null,
                    err: { 
                        message: "User not found.",
                        code: "USER_NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { user, err: null };
        } catch (error: any) {
            return {
                user: null,
                err: {
                    message: "Error fetching user: " + (error?.message || "Unknown error"),
                    code: "GET_USER_ERROR",
                    status: 500
                }
            };
        }
    }
}