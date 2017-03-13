var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

require('./db/db');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: " this is our secret salt",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var UserController = require('./controllers/UserController');
var DrinkController = require('./controllers/DrinkController');
var ChoiceController = require('./controllers/ChoiceController')

app.use('/coffee', DrinkController);
app.use('/user', UserController);
app.use('/path', ChoiceController);



server.listen(3000, function(){
	console.log("server is listening on 3000");
});
