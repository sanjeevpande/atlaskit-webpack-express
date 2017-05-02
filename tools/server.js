var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var server = express();

// view engine setup
var options = { doctype: '<!DOCTYPE html>' };
//server.set('views', path.join(__dirname, 'views'));
server.engine('html', function() {
    return true;
});

server.set('view engine', 'html');

//server.use(favicon());
server.use(logger('dev'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);


// catch 404 and forward to error handler
server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (server.get('env') === 'development') {
    server.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('Internal server error');
    });
}

// production error handler
// no stacktraces leaked to user
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('Internal server error');
});

var debug = require('debug')('MODULE_NAME');

server.set('port', process.env.PORT || 3000);

var server = server.listen(server.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
