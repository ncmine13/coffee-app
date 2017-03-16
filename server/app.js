var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

require('./db/db');

app.use(session({
	secret: " this is our secret salt",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

var authenticateRoute = function(req, res, next){
	if (req.originalUrl === '/user/login' || req.originalUrl === '/user/register') {
		next();
	}
		else {
			//there is not a loggedIn property , booleans
			if (!req.session.isLoggedIn) {
				res.redirect('/user/login')
			}
			else {
				next();
			}
		}
	}
//set before the controllers so it intercepts and checks before controllers start to take over (AKA middleware)
app.use(authenticateRoute);

var UserController = require('./controllers/UserController');
var DrinkController = require('./controllers/DrinkController');
var ChoiceController = require('./controllers/ChoiceController')

app.use(bodyParser.urlencoded({extended: true}));

app.use('/coffee', DrinkController);
app.use('/user', UserController);
app.use('/path', ChoiceController);

server.listen(3000, function(){
	console.log("server is listening on 3000");
});
