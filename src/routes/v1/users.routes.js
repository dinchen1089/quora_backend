const express = require("express");
const { userController } = require("../../controllers");
const userRouter = express.Router();

userRouter.get("/", userController.checkDBOnlineStatus);
userRouter.post("/", userController.addUser);
userRouter.get("/:userId", userController.getUser);
userRouter.put("/:userId", userController.updateUser);

module.exports = userRouter;
