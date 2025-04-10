const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // userId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  role: { type: String, enum: ['HOD', 'teacher', 'student'], required: true },
});

module.exports = mongoose.model('User', userSchema);
