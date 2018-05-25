const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '../.env');
require('dotenv').config({ path: root });

const {
    PORT: port
} = process.env;

const corsOptions = {
    origin: 'http://localhost:4000',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require('./api'));

app.get('/', function (req, res) {

    console.log(fs.readdirSync(__dirname));

    res.send('hello worl23d');
})

app.listen(port, function () {

    console.log("Server is running on " + process.env.PORT);
});
