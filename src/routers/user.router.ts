import express from "express";

const router = express.Router();

// Router level middleware
router.use("/", (req, res) => {
  res.send("This is user route");
});

export default router;
