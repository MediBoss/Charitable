const express = require("express");
const router = express.Router();

// PATH TO MODEL
const Charity = require("../models/charity");
const Donations = require("../models/donation");


// ROUTE : CHARITIES DASHBOARD
router.get("/dashboard", (request, response) => {
  Charity.find()
    .then( (charities) => {
      Donations.find()
        .then( donations => {
          response.render('dashboard', { charities: charities, donations: donations});
        }).catch( error => {
          console.log(error.message);
        });
    }).catch( (error) => {
      console.log(error.message)
    })
});


module.exports = router;
