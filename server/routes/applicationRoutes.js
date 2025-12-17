const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  applyInternship,
  getMyApplications
} = require("../controllers/applicationController");

router.post("/apply", auth, applyInternship);
router.get("/my-applications", auth, getMyApplications);

module.exports = router;
