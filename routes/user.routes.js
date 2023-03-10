import express from "express";
import isAuth from "../middlewares/isAuth.js";
import attachCurrentUser from "../middlewares/attachCurrentUser.js";
import { signupUserController } from "../controllers/users/crete-User/signup.controller.js";
import { listUserController } from "../controllers/users/list-User/list.controller.js";
import { loginUserController } from "../controllers/users/login-User/login.controller.js";
import { profileUserController } from "../controllers/users/profile-User/profile.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signupUserController.signup);

userRouter.post("/login", loginUserController.login);

userRouter.get("/list", listUserController.list);

userRouter.get(
  "/profile",
  isAuth,
  attachCurrentUser,
  profileUserController.profile
);

export { userRouter };
