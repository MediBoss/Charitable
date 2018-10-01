//THE CONTROLLER FOR THE HOME PAGE


const express = require('express');
const router = express.Router();

let charities = [
    { name: 'unicef'},
    { amount: 120}
  ]

router.get('/', function(request,response){
    response.render('home-index', { charities: charities});
  })

  
module.exports = router;