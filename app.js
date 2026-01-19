var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var notesRouter = require('./routes/notes');
var catRouter = require('./routes/cat');
var hpRouter = require('./routes/hp');
var bunniesRouter = require('./routes/bunnies');

var app = express();
var PORT = 30044;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/notes', notesRouter);
app.use('/cat', catRouter);
app.use('/hp', hpRouter);
app.use('/bunnies', bunniesRouter);


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
  res.render('error');
});

module.exports = app;

/*後で消すかも
const express = require('express');
const app = express();

var PORT = 30044;

app.get('/', (req, res) => {
  res.send(`
    <h1><strong>Express</strong></h1>
    <p>Welcome to Express</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});*/