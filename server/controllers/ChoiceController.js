var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
//var Drink = require('../../../models/Drink');
router.get('/', function(req, res){
	res.render('question');
})

module.exports = router;
