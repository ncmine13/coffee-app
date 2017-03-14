var express = require('express');
var router = express.Router();
var Drink = require('../models/Drink');
var bcrypt = require('bcryptjs');


router.get('/coffeeDB', function(req, res){
	Drink.find(function(err, drink){
		res.json(drink)
	})
})

router.get('/drink/:name', function(req, res){
	var name = req.params.name;
	Drink.findOne({name: name}, function(err, drink){
		res.render('drink', drink)
	})
})


router.post('/coffeeDB', function(req, res){
	var drink = new Drink({
		name: req.body.name,
		type: req.body.type,
		isSweet: req.body.isSweet,
		isHealthy: req.body.isHealthy,
		hasMilk: req.body.hasMilk,
		isHot: req.body.isHot,
		loveOrCaffeine: req.body.loveOrCaffeine,
		energy: req.body.energy,
		caffeineLevel: req.body.caffeineLevel
	});
	drink.save();
	res.send("posted!");
})

module.exports = router;
