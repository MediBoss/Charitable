const express= require("express");
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
    
    res.render('home', { news: response.articles});

  }).catch(console.error)
});



module.exports = router;
