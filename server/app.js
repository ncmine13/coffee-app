var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');

require('./db/db');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var UserController = require('./controllers/UserController');
var DrinkController = require('./controllers/DrinkController');

app.use('/coffee', DrinkController)


server.listen(3000, function(){
	console.log("server is listening on 3000");
})
