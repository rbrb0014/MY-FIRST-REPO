const { Router } = require('express');
const { runQuery } = require('./database');

const router = Router();

app.get('/',async (req,res) => {
    const [{name}] = await runQuery('select * from users where id = ?', [3]);
    res.send(name);
});

app.get('/fare', async (req, res) => {
    const { uid } = req.query;
    const {name, fare} = await getFare(uid);
    res.send(`Total fare of ${name} is ${fare} KRW.`)
});
app.get('/train/status', async (req, res) => {
    const { tid } = req.query;
    const { sell } = await getTrainStatus(tid);
    if (sell > 0) res.send(`Train ${tid} is not sold out`);
    else res.send(`Train ${tid} is sold out`);

});

const getFare = async (uid) => {
    const sql = `select users.name as name, sum(Round(fare_rate*distance/1000,-2)) as fare from users inner join tickets on tickets.user=users.id inner join trains on tickets.train=trains.id inner join types on trains.type=types.id where users.id = ? group by users.name`
    const results = await runQuery(sql, [uid]);
    console.log(results);
    return results[0];
};

const getTrainStatus = async (tid) => {
    const sql = 'select types.max_seats - count(trains.id) as sell from trains inner join types on trains.type = types.id inner join tickets on tickets.train = trains.id where trains.id = ? group by trains.id;';
    const results = await runQuery(sql, [tid]);
    return results[0];
};

module.exports = router;