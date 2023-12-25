// controllers/userController.js
const User = require('../models/User');

exports.updateProficiency = async (userId, proficiencyLevel) => {
  try {
    await User.findByIdAndUpdate(userId, { proficiencyLevel });
  } catch (error) {
    console.error('Error updating proficiency level:', error.message);
  }
};

exports.storeProgress = async (userId, progress) => {
  try {
    await User.findByIdAndUpdate(userId, { progress });
  } catch (error) {
    console.error('Error storing progress:', error.message);
  }
};
