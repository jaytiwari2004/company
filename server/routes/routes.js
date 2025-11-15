import express from "express";
import authRoutes from "./authRoutes.js";

const router = express.Router();

// all auth API will start with /auth
router.use("/auth", authRoutes);

export default router;
