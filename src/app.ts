import express, { Request, Response } from "express";
import { userRouter } from "./modules/users/user.routes";
import { initDB } from "./config/portfolioDB";

const app = express();

// parser
app.use(express.json());

// DB:
initDB();

// Route: root-> http://localhost:8000
app.get("/", (req, res) => {
  res.status(200).json({
    To: "Welcome everyone from developer SUVO",
    title: "It is Data's Protfolio Server",
  });
});

// todo: User Crud
app.use("/users", userRouter);

// Route: 404 error
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.path,
  });
});

export default app;
