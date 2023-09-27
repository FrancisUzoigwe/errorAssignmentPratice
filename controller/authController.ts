import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { STATUS } from "../error/ErrorFile";

const prisma = new PrismaClient();

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const created = await prisma.auth.create({
      data: { email, password, name },
    });
    return res.status(STATUS.CREATED).json({
      message: `${name} account has been created successfully`,
      data: created,
    });
  } catch (error: any) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while creating user",
      error: error.message,
    });
  }
};

export const ViewAllAccounts = async (req: Request, res: Response) => {
  try {
    const views = await prisma.auth.findMany();
    return res.status(STATUS.Ok).json({
      message: "This is the list of all accounts on our database",
      data: views,
    });
  } catch (error) {
    return res.status(STATUS.BAD).json({
      message: "Error occured while creating user",
    });
  }
};
