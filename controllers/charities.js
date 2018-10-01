//THE CONTROLLER FOR ALL CHARITIES

const express = require('express');
const router = express.Router();
 
const Charity = require('../models/charity');

// ROUTE : NEW 
router.get('/charities/new', function(request, response){
    response.render('charities-new', {}); // redirect to charity form
});

// ROUTE : CREATE


// ROUTE : SHOW

// ROUTE : EDIT

// ROUTE : UPDATE

// ROUTE : DELETE