const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const p = path.join(__dirname, '../.env');

require('dotenv').config({path: p});
const {
    PORT: port
  } = process.env;

app.get('/', function (req, res) {
    console.log('p : ' + p );
    res.send('hello worl23d');
})

app.listen(port, function () {

    console.log("llgg" + process.env.PORT);
});
