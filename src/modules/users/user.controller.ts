import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);

    if (result.rows.length === 0) {
      return res.status(204).json({
        success: false,
        message: "NO Content",
      });
    }

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser();

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data retived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.getSingleUser(id as string);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Not found data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "single data retrived successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.updateUser(req.body, id as string);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Not found data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "data updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.deleteUser(id as string);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Not found data",
      });
    }

    return res.status(200).json({
      success: true,
      message: "data deleted successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const userControllers = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
