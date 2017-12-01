// load app dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const Routes = require('./routes');

const app = express();
const port = process.env.NODE_ENV || 3000;

// app configurations
app.set('port', port);

// load app middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load our API routes
app.use('/', Routes);

// establish http server connection
app.listen(port, () => { console.log(`App running on port ${port}`) });
