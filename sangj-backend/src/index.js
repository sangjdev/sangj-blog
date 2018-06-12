const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');

const logDirectory = path.join(__dirname, '/log')

const root = path.join(__dirname, '../.env');
require('dotenv').config({ path: root });

const {
    PORT: port,
    CLIENT_HOST: client_host
} = process.env;

const corsOptions = {
    origin: client_host,
    credentials: true,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if( process.env.NODE_ENV == 'production' ) { console.log("Production Mode"); } else if( process.env.NODE_ENV == 'development' ) { console.log("Development Mode"); }
// set NODE_ENV=production

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const accessLogStream = fs.createWriteStream(path.join(__dirname, '/log/access.log'), {flags: 'a'})
const errorLogStream = fs.createWriteStream(path.join(__dirname, '/log/error.log'), {flags: 'a'})

app.use(logger('combined', {
    skip: function (req, res) { return res.statusCode < 400 },
    stream: errorLogStream
  }))

app.use(logger('combined', { stream: accessLogStream }))

app.use(require('./api'));

app.use(function (err, req, res, next) {
    res.status(err.status || 500 || 401).json({ error: 'Something failed!', message: 'client error' });
});

app.listen(port, function () {

    console.log("Server is running on " + process.env.PORT);
});
