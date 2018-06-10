const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(logger("short"));
app.use(logger("dev"));
// app.use(logger({
//     format: 'dev',
//     stream: fs.createWriteStream('app.log', { 'flags': 'w' })
// }));

app.use(require('./api'));

app.use(function (err, req, res, next) {
    console.log('error :: ' + err);
    console.log('err : ' + typeof err);
    console.log('err status : ' + err.status);
    res.status(err.status || 500 || 401).json({ error: 'Something failed!', message: 'zz error' });
});

app.listen(port, function () {

    console.log("Server is running on " + process.env.PORT);
});
