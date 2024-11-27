import { Router } from "express";
import userController from "../Controller/user.controller.js";
const router = Router()

router.post('/register', userController.createUser);
router.post('/login',userController.loginUser);

export default router