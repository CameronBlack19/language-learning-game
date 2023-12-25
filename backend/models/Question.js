// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  language: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of options for multiple-choice questions
  correctAnswer: { type: String, required: true }, // Correct answer for multiple-choice questions
  difficulty: { type: Number, required: true, default: 1 }, // Difficulty level (you can adjust default)
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

