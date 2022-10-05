const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const objToStr = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => res.send(objToStr(req.query)));
app.post('/', (req, res) => res.send(objToStr(req.body)));
app.put('/', (req, res) => res.send(objToStr(req.body)));
app.delete('/', (req, res) => res.send(objToStr(req.body)));


app.listen(port, () => console.log(`${port}포트에서 서버 시작`));