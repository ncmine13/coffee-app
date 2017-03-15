var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Drink = require('../models/Drink');
var bcrypt = require('bcryptjs');

router.get('/', function(req, res){
	res.send("success");
})

router.get('/register', function(req, res){
  res.render('register', {});
  console.log('register works');
});

router.post('/register', function(req, res){
//checking the database to see if there is already a username that matches req.body.username.
  User.findOne({username: req.body.username}, function(err, user){
    console.log(user, ' this is user from database')
    if (user === null) {
      //I want to register them
      //1. salt and hash the users password
      bcrypt.genSalt(10, function(err, salt){
        //now that we created salt, lets create hash
        bcrypt.hash(req.body.password, salt, function(err, hash){
          //now that we created hash, now we can finally save the user in the db.
          //make an object with the correct info to put in the db.
          var userDbEntry = {};
          userDbEntry.username = req.body.username;
          userDbEntry.password = hash;
          //now we can use our model to create an entry in the db
          User.create(userDbEntry, function(err, user){
            if (user) {
              //if user was created, initiate there session

              req.session.username = user.username;
              req.session.userId = user.id
              req.session.isLoggedIn = true;
              // redirect to homepage
              res.redirect('/user/profile')
 		  	  console.log(user.username)
            }
            else {
              res.send('there was an error')
            }
          })
        })
      })
    }
    else {
      //I want to send message, username already taken
      res.render('register', {message: 'username is taken'})
    }
  })
});

router.get('/login', function(req, res){
  console.log(req.session)
  res.render('login', {});
  console.log('login works');
});

router.post('/login', function(req, res){
  //first query the database to find the user
  User.findOne({username: req.body.username}, function(err, user){
    //if there is a user, then unhash their password
    if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, match){
        //this function returns true or false
        console.log(match, ' this is match')
        if (match === true) {
          console.log(' is match passing')
          //set the session and direct to whereever
          req.session.username = user.username;
          req.session.userId = user.id
          req.session.isLoggedIn = true;
          console.log(req.session)

          res.redirect('/user/profile')
        }
        else {
          //send them a message wrong username or password
          res.render('login', {message: 'username or password is wrong'})
          console.log('wrong username or passwrod')
        }
      })
    }
    else {
      res.render('login', {message: 'username or password is wrong'})
      console.log('wrong username or password')
    }
  })
});

router.get('/profile', function(req, res){
  console.log(req.session, ' hey this is the seesssionnnnn in the profile route');
  console.log('profile clicked')
	console.log(req.session.userId, "this is req.session.userId")
	User
	.findById(req.session.userId)
	.populate('favoriteDrinks')
	.exec(function (err, user){
  res.render('profile', {name: req.session.username, favoriteDrinks: user.favoriteDrinks})
});

});

router.post('/profile', function(req, res){
  console.log(req.body);
  res.render('profile')
});

router.get('/logout', function(req, res){
  req.session.destroy(function(err){
    res.redirect('/user/login')
  });
});



module.exports = router;
