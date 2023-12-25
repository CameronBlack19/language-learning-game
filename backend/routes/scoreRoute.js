// routes/scoreRoutes.js
const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.post('/submit', scoreController.submitAnswers);

module.exports = router;
