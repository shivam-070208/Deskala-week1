import { Request, Response, NextFunction } from "express";
import { getToken, verifyAccessToken, AuthToken } from "@/lib/utils";
import { asyncHandler } from "@/lib/async-handler";
import { ExtendedRequest } from "../types/extended-request";

export const isAuth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = getToken(req, AuthToken.ACCESS_TOKEN);

    if (!token) {
        return res.status(401).json({ message: "Authentication required. No token provided." });
    }

    const decoded = verifyAccessToken(token);
    if (!decoded) {
        return res.status(401).json({ message: "Invalid or expired token." });
    }
    (req as ExtendedRequest).user = { userId: decoded.userId, email: decoded.email };
    next();
});

