const express = require('express');
const app = express();

// SECURE CODE: Avoid unsafe eval execution
app.get('/run', (req, res) => {
    let userInput = req.query.cmd;
  res.send("Command received safely: " + userInput);
});

console.log("App is running...");
