import { Router } from "express";
import AuthRouter from "./modules/auth/auth.routes";
import PostRouter from "./modules/post/post.routes";
import UserRouter from "./modules/user/user.routes";

const routes = Router();

routes.use("/auth", AuthRouter);
routes.use("/post", PostRouter);
routes.use("/user", UserRouter);

export default routes;
