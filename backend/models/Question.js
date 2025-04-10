const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionId: { type: String, required: true, unique: true },
  text: { type: String, required: true }, // English
  textMarathi: { type: String, required: true },
  category: { type: String, required: true }, // E.g., "Subject Knowledge"
});

module.exports = mongoose.model('Question', questionSchema);
