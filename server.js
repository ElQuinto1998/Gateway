const express = require('express');
const app = express();
let router = require('./routers/router');
const bodyParser = require('body-parser');

require('./database');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
});

app.use(router);

app.listen(app.get('port'), () => {
    console.log("Simple API Gateway run on localhost:3000");
});
