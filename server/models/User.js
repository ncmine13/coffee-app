var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	favoriteDrinks: [{type: mongoose.Schema.Types.ObjectId, ref:'Drink'}]
})
var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
