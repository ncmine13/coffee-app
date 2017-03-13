var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/coffee-app';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log('connected to ' + connectionString);
})

mongoose.connection.on('error', function(){
	console.log('error ' + error);
})

mongoose.connection.on('disconnected', function(){
	console.log('disconnected from ' + connectionString);
})
