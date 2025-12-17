const Application = require("../models/Application");

// APPLY INTERNSHIP
exports.applyInternship = async (req, res) => {
  try {
    const { internshipId } = req.body;
    const userId = req.user.id;

    const alreadyApplied = await Application.findOne({
      userId,
      internshipId
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already applied for this internship"
      });
    }

    const application = await Application.create({
      userId,
      internshipId
    });

    res.status(201).json({
      message: "Internship applied successfully",
      application
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// VIEW MY APPLICATIONS
exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      userId: req.user.id
    }).populate("internshipId");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
