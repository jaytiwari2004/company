import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "./routes/routes.js";

dotenv.config();

const app = express();

// ✅ Allow only your frontend URL
app.use(
  cors({
    origin: process.env.CLIENT_URL,   // <--- allowed frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// All API routes
app.use("/api", mainRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
