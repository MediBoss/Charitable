// IMPORTING NEEDED MODULES

const express = require("express");
const router = express.Router();
const Donation = require("../models/donation");
const Charity = require("../models/charity");



// ROUTE : NEW DONATION
router.get("/donations/new", function(request, response){
  response.render('donations-new', { charityId: request.params.charityId } );
});

// ROUTE : CREATE DONATION
router.post("/donations", function(request, response){
  Donation.create(request.body)
    .then( (donation) => {
      console.log(donation);
      response.redirect('/');
    }).catch( (error) => {
      console.log(error.message);
    });
});


// ROUTE : SHOW DONATION
router.get("/donations/:id", function(request, response){
  Donation.findById(request.params.id)
    .then( (donation) =>{
      response.render('donations-show', { donation: donation } );
    })
});

//ROUTE : EDIT DONATION
router.get("/donations/:id/edit", function(request, response){
  Donation.findById(request.params.id, function(error, donation){
    response.render('donations-edit', { donation: donation} );
  }).catch( (error) => {
    console.log(error);
  })
});

//ROUTE : UPDATE  DONATION
router.put("/donations/:id", function(request, response){
  Donation.findByIdAndUpdate(request.params.id, request.body)
    .then( (donation) => {
      response.redirect(`/donations/${donation._id}`);
    }).catch( (error) => {
      console.log(error.message);
    });
});

//ROUTE : DELETE DONATION
router.delete("/donations/:id", function(request, response){
  Donation.findByIdAndRemove(request.params.id)
    .then( (donation) => {
      console.log(`Donation ID ${donation._id} has been removed`);
      response.redirect('/dashboard');
    }).catch( (error) => {
      console.log(error.message);
    })
});


 module.exports = router;
