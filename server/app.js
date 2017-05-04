
var dotenv = require('dotenv').config();
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

// app.use(authenticateRoute);
// var authenticateRoute = function(req, res, next){
// 	if (req.originalUrl === '/user/login' || req.originalUrl === '/user/register') {
// 		next();
// 	}
// 		else {
// 			//there is not a loggedIn property , booleans
// 			if (!req.session.loggedIn) {
// 				res.redirect('/user/login')
// 			}
// 			else {
// 				next();
// 			}
// 		}
// 	}
app.use(authenticateRoute);

var UserController = require('./controllers/UserController');
var DrinkController = require('./controllers/DrinkController');


app.use(bodyParser.urlencoded({extended: true}));

app.use('/coffee', DrinkController);
app.use('/user', UserController);

server.listen(process.env.PORT || 3000);
// server.listen(3000);

