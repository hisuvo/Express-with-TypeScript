import { Router } from "express";

const router = Router();

router.get("/", () => console.log("object"));

export const userRouter = router;
