//THE CONTROLLER FOR THE HOME PAGE


const express = require('express');
const router = express.Router();

// PATH TO MODELS
const Charity = require('../models/charity');


router.get('/', function(request,response){
    Charity.find().then(charities => {
        response.render('home-index', { charities: charities});  
    })
    .catch(error => {
        console.lof(error.message);
    })
  });

  
module.exports = router;