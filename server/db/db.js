var mongoose = require('mongoose');
// var connectionString = process.env.DB_HOST;
var connectionString = 'mongodb://localhost/coffee-app';


mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log('connected to ' + connectionString);
})

mongoose.connection.on('error', function(error){
	console.log('error ' + error);
})

mongoose.connection.on('disconnected', function(){
	console.log('disconnected from ' + connectionString);
})
