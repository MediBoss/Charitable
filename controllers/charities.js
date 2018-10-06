//THE CONTROLLER FOR ALL CHARITIES

const express = require('express');
const router = express.Router();
 
const Charity = require('../models/charity');

// ROUTE : NEW 
router.get('/charities/new', function(request, response){
    response.render('charities-form', {}); // redirect to charity form
});

// ROUTE : CREATE
/*
router.post('/charities', function(request,response){
    Charity.create(request.body).then( charity => {
        console.log(request.body);
        response.redirect('/');
    }).catch((error) => {
        console.log(error.message);
    })
})
*/
// ROUTE : SHOW

// ROUTE : EDIT

// ROUTE : UPDATE

// ROUTE : DELETE