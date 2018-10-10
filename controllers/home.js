const express= require("express");
const router = express.Router();
const apiKey = process.env.NEWS_API;

// ROUTE : HOME PAGE
router.get('/', function(request,response){
  response.render('home', {});
});



module.exports = router;
