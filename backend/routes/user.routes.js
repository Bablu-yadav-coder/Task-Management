
import { Router } from "express";
import { getUser, loginUser, register } from "../Controllers/user.controllers.js";
import { get } from "mongoose";
const router = Router();


router.route("/register").post(register);
router.route("/login").post(loginUser)
router.route("/get_user").post(getUser)





export default router;