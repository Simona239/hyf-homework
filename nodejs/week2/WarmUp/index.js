const express = require("express");
const app = express(); 

// Addition
app.get("/numbers/add", (req, res) => {
    const firstNumber = Number(req.query.first);
    const secondNumber = Number(req.query.second); 

    const sum = firstNumber + secondNumber;
    res.send(`${firstNumber} + ${secondNumber} = ${sum}`);
});

// Multiplication

app.get('/numbers/multiply/:first/:second', (req, res) => {
    const firstNumber = Number(req.params.first);
    const secondNumber = Number(req.params.second);
    
    const multiplication = firstNumber * secondNumber;
    res.send(`${firstNumber} * ${secondNumber} = ${multiplication}`);
});

app.listen(3000, () => {
    console.log('server is running');
});