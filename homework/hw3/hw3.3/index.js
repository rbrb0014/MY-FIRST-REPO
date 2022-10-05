const express = require('express');

const app = express();
const port = 3000;

const factorial = n => {
    if (n == 0) return 1;
    else return n * factorial(n - 1);
};

app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    res.send(`${factorial(number)}`);
});

app.get('/factorial',(req,res)=>{
    res.redirect(`/factorial/${req.query.number}`);
});

app.listen(port, () => console.log(`${port}포트에서 서버 시작`));