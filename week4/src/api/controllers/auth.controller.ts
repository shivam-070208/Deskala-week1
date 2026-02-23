import { asyncHandler } from "@/lib/async-handler"
import type { Response ,Request } from "express"
import { UserService } from "@/api/services/user.service"
import { passwordValidator } from "@/api/validator/password.validator";

import {
    generateRefreshToken,
    generateAccessTOken,
    setToken,
    AuthToken
} from "@/lib/utils";



const userService = new UserService();



const registerController = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, and password are all required fields" });
    }
    const {user,err} = await userService.createNewUser(name, email, password);

    if ( err !==null ){
        return res.status(err.status ||404).json({...err})
    }
    const accessToken = generateAccessTOken(user._id.toString(), user.email);
    const refreshToken = generateRefreshToken(user._id.toString(), user.email);

    setToken(res, AuthToken.ACCESS_TOKEN, accessToken);
    setToken(res, AuthToken.REFRESH_TOKEN, refreshToken);

    return res.status(201).json({
        message: "User registered successfully",
        user,
        accessToken,
        refreshToken
    });
});



const loginController = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
    }

    const { user, err } = await userService.getUserByEmail(email);

    if (err !=null) {
        return res.status(err.status||404).json({ ...err });
    }

    const isValid = await passwordValidator(password, user.password);

    if (!isValid) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessToken = generateAccessTOken(user._id.toString(), user.email);
    const refreshToken = generateRefreshToken(user._id.toString(), user.email);

    setToken(res, AuthToken.ACCESS_TOKEN, accessToken);
    setToken(res, AuthToken.REFRESH_TOKEN, refreshToken);

    return res.status(200).json({
        message: "Login successful",
        user,
        accessToken, // Optionally return tokens in response body as well
        refreshToken
    });
});



export {
    registerController,
    loginController
}