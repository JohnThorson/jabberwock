const express       = require('express');
const request       = require('request')
const path          = require('path');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const exphbs        = require('express-handlebars');
const routes        = require('./public/routes/index');
const app           = express();

// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
    defaultLayout: 'index',
	extname: '.hbs',
	layoutsDir: __dirname + '/public',
    partialsDir: [
        __dirname + '/public'
    ],
    helpers: require('./helpers')
});

/// view engine setup
app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', '/assets/nova/images/favicons/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Set Router
app.use('/', routes);

// catch 404 or forward to error handler
app.use(function(err, req, res, next) {
  if (typeof err[path] == 'undefined') {
        res.render('404', {title: 'Page Not Found',
	layout: '404', error: err.stack});
    } else {
        next(err);
    }
});

module.exports = app;
