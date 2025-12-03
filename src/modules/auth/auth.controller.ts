import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authServices.loginUser(req.body);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(201).json({
      success: false,
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const authController = {
  loginUser,
};
