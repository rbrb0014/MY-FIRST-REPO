const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/api', router);// '/'에 맞는거만 router 실행

app.listen(port, () => console.log(`Server on port ${port}`));