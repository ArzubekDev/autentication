import { Router } from "express";
import todoControllers from "./todo.controllers.js";

const router: Router = Router()

router.post("/post", todoControllers.addNewData)
router.get("/get-all", todoControllers.getAllData)

export default router