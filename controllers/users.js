const express = require('express');
const router = express.Router();

// PATH TO MODEL
const User = require('../models/user');


// ROUTE : ADD NEW USER
router.get("/charities/:charityId/users/new", function(request, response){
  response.render("users-new", {charityId: request.params.charityId});
});

// ROUTE : CREATE USER
router.post('/charities/users', function(request,response){
    console.log(request.body);
    User.create(request.body).then( (user) => {
      console.log(request.body);
        response.redirect(`/charities/${user.charityId}`);
    }).catch((error) => {
        console.log(error.message);
    });
});

// ROUTE : SHOW
router.get('/charities/:charityId/users/:id', function(request,response){
    User.findById(request.params.id).then( (user) => {
      console.log(user);
      response.render("users-show", { user: user});
    }).catch( (error) => {
        console.log(error.message);
    });
});

// ROUTE : DELETE CHARITY
router.delete('/charities/:charityId/users/:id', function(request, response){
    User.findByIdAndRemove(request.params.id)
      .then(user => {
        response.redirect(`/`);
    }).catch( (error) => {
        console.log(error.message);
    });
});

module.exports = router;
