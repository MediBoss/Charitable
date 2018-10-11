const express= require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const NewsAPI = require("newsapi");
const router = express.Router();
const apiKey = process.env.NEWS_API;
const keyword = "charities"
const newsapi = new NewsAPI(apiKey);


// ROUTE : HOME PAGE
router.get('/', function(req,res){

  var term = encodeURIComponent(keyword);
  var url = "https://newsapi.org/v2/everything?q=" + term + "&apiKey=" + apiKey;

  https.get(url, function(response){

    response.setEncoding('utf8');
    var dataToBeReturned = "";

    response.on("data", function(inComingData){
      // Continuously update stream with data
      dataToBeReturned += inComingData;
    });
    response.on("end", function(){
      var parsedDataFromApi = JSON.parse(dataToBeReturned);
      console.log(parsedDataFromApi.articles[0]);
      res.render('home', { news: parsedDataFromApi.data});
    });
  });

});



module.exports = router;
