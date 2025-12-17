const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// =====================
// ✅ CONNECT DATABASE (SERVERLESS SAFE)
// =====================
connectDB();

// =====================
// ✅ CORS CONFIG
// =====================
app.use(
  cors({
    origin: "*", // IMPORTANT for Vercel
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
// ✅ SERVER START
// =====================
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
