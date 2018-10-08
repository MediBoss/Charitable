if(!process.env.PORT){
  require('dotenv').config();
}

// IMPORTING NEEDED EXTERNAL MODULES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const http = require('http');
const app = express();


// IMPORTING THE CONTROLLERS
const home = require('./controllers/home');
const charities = require('./controllers/charities');

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost/charitable', {useNewUrlParser: true});



// SETTING UP VIEWS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_ method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(home);
app.use(charities);

// SERVER BOOTING UP
app.listen(3000, function() {
  console.log('Server Listening on Port 3000');
});

module.exports = app;