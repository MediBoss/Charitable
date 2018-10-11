const express = require("express");
const router = express.Router();

// PATH TO MODEL
const Charity = require("../models/charity");
const Donations = require("../models/donation");


// ROUTE : CHARITIES DASHBOARD
router.get("/dashboard", (request, response) => {
  Donations.find()
    .then( donations => {
      response.render('dashboard', { donations: donations});
    }).catch( error => {
      console.log(error.message);
    });
});


module.exports = router;
