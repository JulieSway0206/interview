//var express = require('express'),
//    bodyParser      = require('body-parser'),
//    methodOverride  = require('method-override'),
//    sessions        = require('./routes/sessions'),
//    app = express();
//
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//app.use(methodOverride());      // simulate DELETE and PUT
//
//// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
//app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
//});
//
//app.get('/sessions', sessions.findAll);
//app.get('/sessions/:id', sessions.findById);
//
//app.set('port', process.env.PORT || 5000);
//
//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});
var app = require('./express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: "put your text here"}));
app.use(passport.initialize());
app.use(passport.session());


// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));



// require ("./test/app.js")(app);
// require('./assignment/app');
// require('./lectures/session/app');
require('./project/app');
var port = process.env.PORT || 3000;

app.listen(port);
