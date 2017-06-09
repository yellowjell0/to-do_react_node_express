const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');

// sets up express app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// default catch all that sends back a welcome message in JSON format
app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the beginning of nothingness.'
}));

module.exports = app
