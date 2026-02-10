import { SignOptions } from "jsonwebtoken";

export const MONGO_QUERY = process.env.MONGO_QUERY;
export const PORT = process.env.PORT||3000;


export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN as SignOptions['expiresIn'];
export const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN as SignOptions['expiresIn'];
