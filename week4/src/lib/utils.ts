import { cookieOptions } from "@/config/cookie";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from "@/config/env.config";
import { Request, Response } from "express";
import jwt  from "jsonwebtoken";

interface TokenPayload {
    userId: string;
    email: string;
}

export enum AuthToken {
    REFRESH_TOKEN = "refresh_token",
    ACCESS_TOKEN = "access_token"
}

export const generateRefreshToken = (userId: string, email: string): string => {
    const payload: TokenPayload = {
        userId,
        email
    };

    return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN
    });
};


export const generateAccessTOken = (userId: string, email: string): string => {
    const payload: TokenPayload = {
        userId,
        email
    };
    return jwt.sign(payload, ACCESS_TOKEN_SECRET as jwt.Secret, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN 
    });
};


export const setToken = (res: Response, key: string, value: string) => {
    res.cookie(key, value, { ...cookieOptions });
}



export const getToken = (req: Request, tokenKey: string): string | undefined => {
    if (req.cookies && req.cookies[tokenKey]) {
        return req.cookies[tokenKey];
    }

    const authHeader =
        req.headers["authorization"] ||
        req.headers["Authorization"];

    if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
        return authHeader.slice(7).trim();
    }
    return undefined;
};




export const verifyAccessToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
    } catch (error) {
        return null;
    }
};

export const verifyRefreshToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, REFRESH_TOKEN_SECRET) as TokenPayload;
    } catch (error) {
        return null;
    }
};
