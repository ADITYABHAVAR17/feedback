const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  class: { type: String, required: true }, // E.g., "Third Year"
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Student', studentSchema);
