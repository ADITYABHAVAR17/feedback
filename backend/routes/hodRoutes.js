const express = require("express");
const {
  registerTeacher,
  assignSubjectToTeacher,
  bulkAddStudents,
  getDashboardStats,
  getAllTeachers,
  getAllSubjects,
  getAllStudents,
  getFeedbackAnalytics,
  addFeedbackQuestion,
  updateFeedbackQuestion,
  deleteFeedbackQuestion,
  getAllFeedbackQuestions,
} = require("../controllers/hodController");

// const { authMiddleware, roleMiddleware } = require("../middlewares/authMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Use middlewares
router.use(authMiddleware);
router.use(roleMiddleware("HOD"));

// Routes
router.post("/teachers", registerTeacher);
router.post("/subjects/assign", assignSubjectToTeacher);
router.post("/students/bulk", bulkAddStudents);
router.get("/dashboard", getDashboardStats);
router.get("/teachers", getAllTeachers);
router.get("/subjects", getAllSubjects);
router.get("/students", getAllStudents);
router.get("/analytics", getFeedbackAnalytics);

// Feedback questions
router.post("/feedback-questions", addFeedbackQuestion);
router.put("/feedback-questions/:id", updateFeedbackQuestion);
router.delete("/feedback-questions/:id", deleteFeedbackQuestion);
router.get("/feedback-questions", getAllFeedbackQuestions);

module.exports = router;
