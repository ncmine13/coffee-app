var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String


})

var userModel = mongoose.model('User', UserSchema);

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
