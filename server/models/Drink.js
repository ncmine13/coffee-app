var mongoose = require('mongoose');

var DrinkSchema = new mongoose.Schema({
	name: String,
	type: String,
	isSweet: Boolean,
	isHealthy: Boolean,
	hasMilk: Boolean,
	isHot: Boolean,
	loveOrCaffeine: String,
	energy: String,
	caffeineLevel: Number
})

var drinkModel = mongoose.model('Drink', DrinkSchema);

module.exports = drinkModel;
