var express = require('express');
var router = express.Router();
var Drink = require('../models/Drink');
var bcrypt = require('bcryptjs');
var User = require('../models/User');


router.get('/coffeeDB', function(req, res){
	Drink.find(function(err, drink){
		res.json(drink)
	})
})

router.get('/drink/:name', function(req, res){
	var name = req.params.name;
	var userId = req.session.userId;
	Drink.findOne({name: name}, function(err, drink){
		User.findById(userId, function(err, user){
			user.favoriteDrinks.push(drink)
			user.save();
			res.render('drink', drink)
		})
	})
})

router.post('/coffeeDB', function(req, res){
	var drink = new Drink({
		name: req.body.name,
		type: req.body.type,
		cravingSatisfied: req.body.cravingSatisfied,
		calories: req.body.calories,
		ingredients: req.body.ingredients,
		image: req.body.image,
	});
	drink.save();
	res.send("posted!");
})

router.delete('/coffeeDB/:id', function(req, res){
	var id = req.params.id;

	Drink.findById(id, function(err, drink){
		drink.remove();
		res.send("success on delete");
	})
})

module.exports = router;
