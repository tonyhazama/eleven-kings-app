const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Load Config 
const config = require('../config');
// Configure KNEX & Objection
const connection = require('../knexfile');
const knex = require('knex')(config.db)
const { Model } = require('objection')
Model.knex(knex)


// Import Routes
const indexRouter = require('./routes');
const usersRouter = require('./routes/users-route');
const brandRouter = require('./routes/brand-route');
const productRouter = require('./routes/product-route');

// Configure .env

// const config = require('../config/config.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/brands', brandRouter);
app.use('/products', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send(err)
});


module.exports = app;
