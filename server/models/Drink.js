var mongoose = require('mongoose');

var DrinkSchema = new mongoose.Schema({
	name: String//Mocha
	size: String//small
	type: String//espresso
	caffeineLevel: String//low
	sweetnessLevel: Number//8
	qualities: Array//["sugary", "chocolatey", "fun"]
	isHealthy: Boolean//False
	calories: Number//500,
	isHot: Boolean//True,
	imageURL: String
	beanType: String,
	origin: String
})

var drinkModel = mongoose.model('Drink', DrinkSchema);

module.exports = drinkModel;
