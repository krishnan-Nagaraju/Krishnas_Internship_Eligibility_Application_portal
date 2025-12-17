const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =====================
// ✅ CORS CONFIG (FIXED)
// =====================
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// =====================
// ✅ BODY PARSER
// =====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================
// ✅ ROUTES
// =====================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/internships", require("./routes/internshipRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));

// =====================
// ✅ DATABASE CONNECTION
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// =====================
// ✅ SERVER START
// =====================



