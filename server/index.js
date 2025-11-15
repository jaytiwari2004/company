import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// all API routes
app.use("/api", mainRoutes);

// connect mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
