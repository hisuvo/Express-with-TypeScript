import express from "express";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();

// parser
app.use(express.json());
app.use(express.urlencoded());

app.listen(process.env.PORT, () =>
  console.log(`server run on port ${process.env.PORT}`)
);
