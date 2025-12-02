import { pool } from "../../config/portfolioDB";
import bcrypto from "bcryptjs";

const createUser = async (payload: Record<string, unknown>) => {
  const { name, role, email, password, age, phone, address } = payload;

  const hasePassword = await bcrypto.hash(password as string, 10);

  const result = await pool.query(
    `INSERT INTO users (name, role, email, password, age, phone, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, role, email, hasePassword, age, phone, address]
  );

  return result;
};

const getUser = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);

  return result;
};

const updateUser = async (payload: Record<string, unknown>, id: string) => {
  const { name, role, email, password, age, phone, address } = payload;

  const result = await pool.query(
    `UPDATE users SET role=$1, email=$2 WHERE id=$3 RETURNING *`,
    [role, email, id]
  );

  return result;
};

const deleteUser = async (id: string) => {
  const result = await pool.query(`DELETE FROM users WHERE id=$1 RETURNING *`, [
    id,
  ]);

  return result;
};

export const userServices = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
