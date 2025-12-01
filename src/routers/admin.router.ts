import express from "express";

const router = express.Router();

// Router Level Middleware
router.use("/", (req, res) => {
  res.send("This is admin route");
});

export default router;
