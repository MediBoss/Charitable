const express= require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const router = express.Router();
const apiKey = process.env.NEWS_API;
const keyword = "charities"


// ROUTE : HOME PAGE
router.get('/', function(request,response){

  var term = encodedURIComponent(keyword);
  var url = "https://newsapi.org/v2/everything?q=" + term + "&apiKey=" + apiKey;

  https.get(url, function(request, response){
    response.setEncoding("utf-8");
    var dataToBeReturned = "";

    response.on("data", function(inComingData){
      // Continuously update stream with data
      dataToBeReturned += inComingData;
    });

    response.on("end", function(){
      var parsedDataFromApi = JSON.parse(dataToBeReturned);
      response.render('homes', { news: parsedDataFromApi.data});
    });
  });

});



module.exports = router;
