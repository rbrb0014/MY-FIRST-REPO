const express = require('express');


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    return res.render('index.pug');
});

app.get('/page', (req, res) => {
    const { page } = req.query;
    return res.render('board.pug', {
        page
    });
});

app.get('/posts', (req, res) => {
    const { until } = req.query;
    const untilParsed = parseInt(until, 10);

    const posts = [];
    if (!isNaN(untilParsed)) {
        for (let i = 0; i < untilParsed; i++) {
            posts.push(`Posts ${i + 1}`);
        }
    }

    return res.render('posts.pug',{posts});
});

app.post('/login',(req,res)=>{
    console.dir(req.body);
})

app.listen(port, () => console.log('Running'));