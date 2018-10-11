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

  newsapi.v2.everything({
    q: keyword,
    language: 'en',
    sortBy: 'relevancy'
  }).then(response => {
    console.log(response.articles[0].source);
  });
});



module.exports = router;
