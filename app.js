const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

//using morgan for logs! Can do custom logs but new package ALERT!
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/schools', schoolRoutes);

module.exports = app;
