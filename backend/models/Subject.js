const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  branch: { type: String, required: true },
  class: { type: String, required: true }, // E.g., "Third Year"
});

module.exports = mongoose.model('Subject', subjectSchema);
