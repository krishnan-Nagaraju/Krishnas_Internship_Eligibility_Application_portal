const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    minCGPA: {
      type: Number,
      required: true,
    },
    branches: {
      type: [String], // CSE, ISE, ECE
    },
    requiredSkills: {
      type: [String],
    },
    duration: {
      type: String, // 3 Months
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
