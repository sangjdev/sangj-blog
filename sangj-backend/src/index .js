require('dotenv').config();
const {
    PORT: port
  } = process.env;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', function (req, res) {

    res.send('hello world');
})

app.listen(port, function () {

    console.log("llgg" + process.env.PORT);
});
