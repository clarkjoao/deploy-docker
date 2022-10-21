import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.json("user");
});

export default userRouter;
