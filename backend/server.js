// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/language-learning-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Language Learning Game API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
