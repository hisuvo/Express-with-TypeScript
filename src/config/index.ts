import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  port: process.env.PORT,
  privetKey: process.env.PRIVATE_KEY,
  connection_string: process.env.CONNECTION_STRING,
};

export default config;
