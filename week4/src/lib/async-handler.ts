import type { NextFunction, Request, Response } from "express";

const asyncHandler = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await fn(req, res, next);
      return result;
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: 'internal Server Error',
      });
    }
  };
};

export { asyncHandler };