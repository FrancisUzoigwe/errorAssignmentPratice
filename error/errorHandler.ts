import { NextFunction, Request, Response } from "express";
import { STATUS, errorFile } from "./ErrorFile";

export const handleError = (
  error: errorFile,
//   req: Request,
  res: Response,
//   next: NextFunction
) => {
  return res.status(STATUS.BAD).json({
    errorName: error.errorName,
    errorMessage: error.errorMessage,
    errorSuccess: error.errorSuccess,
    errorStatus: error.errorStatus,
    errorStack: error.stack,
    error,
  });
};

export const errorHandler = (
  error: errorFile,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleError(error, res);
};
