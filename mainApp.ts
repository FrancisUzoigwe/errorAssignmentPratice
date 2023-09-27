import cors from "cors";
import express, { Application, NextFunction, Request ,Response} from "express";
import { STATUS, errorFile } from "./error/ErrorFile";
import { errorHandler } from "./error/errorHandler";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"]
  }))
  app.all("*", (error: errorFile, req: Request, res: Response, next: NextFunction) => {
next(
    new errorFile({
        errorName: `Route Error ${req.originalUrl}`,
        errorMessage: `This is as a result of route misplacement ${req.originalUrl}`,
        errorStatus: STATUS.BAD,
        errorSuccess: false
    })
)
  })
  app.use(errorHandler)
  app.get("/", (req: Request, res: Response) => {
    try {
        return res.status(STATUS.Ok).json({
            message : "You're successfully using the API's of Kossyrisochukwu Francis Uzoigwe"
        })
    } catch (error) {
        return res.status(STATUS.BAD).json({
            message : "We're sorry but we think you have to go premium to access this api fully"
        })
    }
  })
};
