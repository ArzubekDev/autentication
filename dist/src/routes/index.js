import { Router } from "express";
import cors from "cors";
import todoRouter from "../modules/todo/todo.router.js";
const globalRouter = Router();
const corsConfig = {
    origin: ["http://localhost:3000"]
};
globalRouter.use(cors(corsConfig));
globalRouter.use("/todo", todoRouter);
export default globalRouter;
//# sourceMappingURL=index.js.map