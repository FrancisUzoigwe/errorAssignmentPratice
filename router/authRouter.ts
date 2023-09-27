import express, { Router } from "express";
import { RegisterUser, ViewAllAccounts } from "../controller/authController";

const router = express.Router()
router.route("/register").post(RegisterUser)
router.route("/view").get(ViewAllAccounts)
export default router