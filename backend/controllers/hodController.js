const Teacher = require("../models/Teacher");
const Subject = require("../models/Subject");
const Student = require("../models/Student");
const Question = require("../models/Question");
const Feedback = require("../models/Feedback");
const User = require("../models/User");

// Register teacher
exports.registerTeacher = async (req, res) => {
  try {
    const { name, department, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Teacher already exists" });

    const newUser = new User({ name, email, password, role: 'teacher' });
    await newUser.save();

    const newTeacher = new Teacher({ teacherId: newUser._id, name, department, subjects: [] });
    await newTeacher.save();

    res.status(201).json({ message: "Teacher registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering teacher", error: err.message });
    console.error(err);
  }
};

// Assign subject
exports.assignSubjectToTeacher = async (req, res) => {
  try {
    const { teacherId, name, year, semester, branch, class: className } = req.body;
    const subject = new Subject({ name, teacherId, year, semester, branch, class: className });
    await subject.save();

    await Teacher.findByIdAndUpdate(teacherId, { $push: { subjects: subject._id } });

    res.status(201).json({ message: "Subject assigned to teacher" });
  } catch (err) {
    res.status(500).json({ message: "Error assigning subject", error: err.message });
  }
};

// Bulk add students
exports.bulkAddStudents = async (req, res) => {
  try {
    const students = req.body.students;
    await Student.insertMany(students);
    res.status(201).json({ message: "Students added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding students", error: err.message });
  }
};

// Get dashboard overview
exports.getDashboardStats = async (req, res) => {
  try {
    const totalTeachers = await Teacher.countDocuments();
    const totalSubjects = await Subject.countDocuments();
    const totalFeedbacks = await Feedback.countDocuments();
    const totalStudents = await Student.countDocuments();

    res.status(200).json({
      totalTeachers,
      totalSubjects,
      totalFeedbacks,
      totalStudents,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard data", error: err.message });
  }
};

// Get data
exports.getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find().populate("subjects");
  res.json(teachers);
};

exports.getAllSubjects = async (req, res) => {
  const subjects = await Subject.find().populate("teacherId");
  res.json(subjects);
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Feedback analytics
exports.getFeedbackAnalytics = async (req, res) => {
  try {
    const analytics = await Feedback.aggregate([
      {
        $group: {
          _id: "$teacherId",
          avgSubjectKnowledge: { $avg: "$ratings.subjectKnowledge" },
          avgCommunicationSkills: { $avg: "$ratings.communicationSkills" },
          avgTeachingAids: { $avg: "$ratings.teachingAids" },
          avgDiscipline: { $avg: "$ratings.classDiscipline" },
          avgEvaluation: { $avg: "$ratings.evaluation" },
          avgBehavior: { $avg: "$ratings.behavior" },
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(analytics);
  } catch (err) {
    res.status(500).json({ message: "Error fetching analytics", error: err.message });
  }
};

// Feedback questions
exports.addFeedbackQuestion = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.status(201).json({ message: "Question added" });
};

exports.updateFeedbackQuestion = async (req, res) => {
  await Question.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ message: "Question updated" });
};

exports.deleteFeedbackQuestion = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Question deleted" });
};

exports.getAllFeedbackQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};
