// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  proficiencyLevel: { type: String, default: 'Beginner' },
  progress: { type: Array, default: [] },
});

module.exports = mongoose.model('User', userSchema);