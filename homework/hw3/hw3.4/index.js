const express = require('express');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('login.pug'));

app.post('/login',(req,res)=>{
    const {username, password} = req.body;
    return res.send(`Username: ${username} / Password: ${password}`);
});

app.listen(port, () => console.log(`${port}포트에서 서버 시작`));