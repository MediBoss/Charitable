const express = require('express');
const router = express.Router();
 
// PATH TO MODELS
const Charity = require('../models/charity');

// ROUTE : NEW CHARITY
router.get('/charities/new', function(request, response){
    response.render('charities-new', {});
});

// ROUTE : CREATE CHARITY
router.post('/charities', function(request,response){
    Charity.create(request.body).then( (charity) => {
        console.log(charity)
        response.redirect('/');
    }).catch((error) => {
        console.log(error.message);
    })
})

// ROUTE : SHOW
router.get('/charities/:id', function(request,response){
    Charity.findById(request.params.id).then((charity) => {
        response.render('charities-show', { charity: charity});
    }).catch((error) => {
        console.log(error.message);
    });
});

// ROUTE : EDIT

// ROUTE : UPDATE

// ROUTE : DELETE

module.exports = router;