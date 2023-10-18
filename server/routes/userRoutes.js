import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

//router object
const router = express.Router();

//routes
// register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//export
export default router;
