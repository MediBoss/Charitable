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
const charities = require('./controllers/charities');
const dashboard = require('./controllers/dashboard');
const home = require('./controllers/home');
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/charitable';
// DATABASE CONNECTION
mongoose.connect(mongoURI, {useNewUrlParser: true});

// SETTING UP VIEWS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(charities);
app.use(dashboard);
app.use(home);

// SERVER BOOTING UP
app.listen(3000, function() {
  console.log('Server Listening on Port 3000');
});

module.exports = app;
