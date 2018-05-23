require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const env = process.env;

app.get('/', function (req, res) {

    res.send('hello world');
})

app.listen(env.port, function () {
    console.log("env"+ JSON.stringify(env));
    console.log('express server has started on port 3355');
    console.log("llgg" + process.env.PORT);
});
