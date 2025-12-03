import { Router } from "express";
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/", userControllers.createUser);
router.get("/", auth("admin"), userControllers.getUser);
router.get("/:id", auth("admin", "user"), userControllers.getSingleUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

export const userRouter = router;
