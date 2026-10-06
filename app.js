const express = require('express');
const app = express();

// INTENTIONAL VULNERABILITY: CodeQL will flag unsafe eval()
app.get('/run', (req, res) => {
    let userInput = req.query.cmd;
    eval(userInput);
    res.send('Executed');
});

console.log("App is running...");
