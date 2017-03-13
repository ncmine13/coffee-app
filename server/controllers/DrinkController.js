var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Drink = require('../models/Drink');
var bcrypt = require('bcryptjs');


router.get('/coffeeDB', function(req, res){
	Drink.find(function(err, drink){
		res.json(drink)
	})
})

router.post('/coffeeDB', function(req, res){
	var drink = new Drink({
		name: req.body.name,
		type: req.body.type,
		caffeineLevel: req.body.type,
		sweetnessLevel: req.body.sweetnessLevel,
		isHealthy: req.body.isHealthy,
		calories: req.body.calories,
		isHot: req.body.isHot,
		beanOrigin: req.body.beanOrigin
	});
	drink.save();
	res.send("posted!");
})

module.exports = router;
