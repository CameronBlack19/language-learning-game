// controllers/exerciseController.js
const difficultyLevels = require('../data/difficultyLevels');

exports.getExerciseQuestions = (req, res) => {
  const { language } = req.params;
  const questions = difficultyLevels[1][language]; // assuming difficulty level 1
  res.json(questions);
};

// routes/exerciseRoutes.js
const express = require('express');
const router = express.Router();
const exerciseController = require('./exerciseController');

router.get('/:language', exerciseController.getExerciseQuestions);

module.exports = router;
