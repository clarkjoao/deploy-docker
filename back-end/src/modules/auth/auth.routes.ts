import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  return res.json("auth");
});

export default authRouter;
