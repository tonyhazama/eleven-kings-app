// * Imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();


function logResponseBody(req, res, next) {
  var oldWrite = res.write,
      oldEnd = res.end;

  var chunks = [];

  res.write = function (chunk) {
    chunks.push(chunk);

    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk)
      chunks.push(chunk);

    var body = Buffer.concat(chunks).toString('utf8');
    console.log(req.path, body);

    oldEnd.apply(res, arguments);
  };

  next();
}

// * Load Config
const config = require('../config');

  // * Configure KNEX & Objection
const knex = require('knex')(config.db)
const { Model } = require('objection')
Model.knex(knex)


// * Import Utils
const throwError = require('./utils/throw-error');


// * View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// * Apply Middleware
// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(logResponseBody);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())




// * Register Routes

app.use('/', routes.indexRouter);
app.use('/users', routes.usersRouter);
app.use('/brands', routes.brandRouter);
app.use('/products', routes.productRouter);


// * Bad Request ie. no route found
app.use((req, res, next) => {
  res.on('finish')
  // throwError.BadRequest(req, res, next);
});

module.exports = app;
