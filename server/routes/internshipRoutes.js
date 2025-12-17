const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getEligibleInternships,
  addInternship
} = require("../controllers/internshipController");

router.get("/eligible", auth, getEligibleInternships);
router.post("/add", auth, addInternship);

module.exports = router;
