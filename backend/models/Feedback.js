const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedbackId: { type: String, required: true, unique: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  ratings: {
    subjectKnowledge: { type: Number, min: 1, max: 5 },
    communicationSkills: { type: Number, min: 1, max: 5 },
    teachingAids: { type: Number, min: 1, max: 5 },
    classDiscipline: { type: Number, min: 1, max: 5 },
    evaluation: { type: Number, min: 1, max: 5 },
    behavior: { type: Number, min: 1, max: 5 },
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
