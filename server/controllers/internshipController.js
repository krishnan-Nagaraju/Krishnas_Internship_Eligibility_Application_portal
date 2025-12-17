const Internship = require("../models/Internship");
const User = require("../models/User");


// ADD INTERNSHIP (TEMP / TEST API)
exports.addInternship = async (req, res) => {
  try {
    const internship = await Internship.create(req.body);
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEligibleInternships = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user)
      return res.status(404).json({ message: "User not found" });

    const internships = await Internship.find({
      minCGPA: { $lte: user.cgpa },
      branches: user.branch,
      requiredSkills: { $in: user.skills }
    });

    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
