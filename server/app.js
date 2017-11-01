import express from 'express';
import bodyParser from 'body-parser';
import * as DButils from './InterlayerDB';

DButils.connectionToDB();

const app = express();

app.use( bodyParser.json() );

app.post('/articles', function (req, res) {
    let frontArticle = req.body.newArticle;
    DButils.createArticle(frontArticle)
});

app.get('/authorized', (req, res) => {
    DButils.findAllArticles().then((data) => res.send(data));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
