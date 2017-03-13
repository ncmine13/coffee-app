var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Drink = require('../models/Drink');
var bcrypt = require('bcryptjs');

router.get('/', function(req, res){
	res.send("success");
})

module.exports = router;
