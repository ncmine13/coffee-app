var mongoose = require('mongoose');

var DrinkSchema = new mongoose.Schema({
	name: String,
	type: String,
	cravingSatisfied: String,
	calories: String,
	ingredients: String,
	image: String
})

var drinkModel = mongoose.model('Drink', DrinkSchema);

module.exports = drinkModel;
