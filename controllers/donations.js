// IMPORTING NEEDED MODULES

const express = require("express");
const router = express.Router();
const Donation = require("../models/donation");
const Charity = require("../models/charity");



// ROUTE : NEW DONATION
router.get("/charities/:charityId/donations/new", function(request, response){
  response.render('donations-new', { charityId: request.params.charityId } );
});

// ROUTE : CREATE DONATION
router.post("/charities/:charityId/donations", function(request, response){
  Donation.create(request.body)
    .then( (donation) => {
      console.log(donation);
      response.redirect(`/charities/${donation.charityId}`);
    }).catch( (error) => {
      response.status(400).send( {error: error} )
    });
});

// ROUTE : SHOW DONATION
router.get("/charities/:charityId/donations/:id", function(request, response){
  Charity.findById(request.params.charityId)
});

//ROUTE : EDIT DONATION
router.get("/charities/:charityId/donations/:id/edit", function(request, response){

});

//ROUTE : UPDATE  DONATION
router.put("/charities/charityId/donations/:id", function(request, response){

});

//ROUTE : DELETE DONATION
router.delete("/charities/charityId/donations/:id", function(request, response){

});


module.exports = router;
