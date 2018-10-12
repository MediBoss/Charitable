//THE CONTROLLER FOR ALL USERS

const express = require('express');
const router = express.Router();
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
    Charity.findById(request.params.id).then( (charity) => {
    }).catch( (error) => {
        console.log(error.message);
    });
});

// // ROUTE : EDIT CHARITY
// router.get('/charities/:id/edit', function(request, response){
//     Charity.findById(request.params.id, function(error, charity){
//         response.render('charities-edit', { charity: charity});
//     }).catch( (error) => {
//         console.log(error.message);
//     });
// });
//
// // ROUTE : UPDATE CHARITY
// router.put('/charities/:id', function(request,response){
//     Charity.findByIdAndUpdate(request.params.id, request.body).then(charity => {
//         response.redirect(`/charities/${charity._id}`);
//     }).catch( (error) => {
//         console.log(error.message)
//     });
// });

// ROUTE : DELETE CHARITY
router.delete('/charities/:charityId/users/:id', function(request, response){
    User.findByIdAndRemove(request.params.id)
      .then(user => {
        response.status(200).send({
          user: user
        });
    }).catch( (error) => {
        response.send(400).send({
          error: error
        });
    });
});

module.exports = router;
