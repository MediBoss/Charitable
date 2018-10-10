const express = require("express");
const router = express.Router();

// PATH TO MODEL
const Charity = require("../models/charity");


// ROUTE : CHARITIES DASHBOARD
router.get("/dashboard", (request, response) => {
  Charity.find()
    .then(charities => {
      response.render('dashboard', { charities: charities});
    }).catch(error => {
      console.log(error.message);
    });
});


module.exports = router;
