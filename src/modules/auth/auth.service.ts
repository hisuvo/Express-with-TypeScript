import { pool } from "../../config/portfolioDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: Record<string, unknown>) => {
  const { role, email, password } = payload;

  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  if (result.rows.length === 0) {
    return null;
  }

  const user = result.rows[0];

  // check password
  const isMatch = await bcrypt.compare(password as string, user?.password);

  if (!isMatch) {
    return false;
  }

  // Create token
  const token = jwt.sign(
    { name: user.name, email: user.email, role: user.role },
    config.privetKey as string,
    {
      expiresIn: "7d",
    }
  );

  return { token, user };
};

export const authServices = {
  loginUser,
};
