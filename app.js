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
const port = process.env.PORT || 3000;
const app = express();


// IMPORTING THE CONTROLLERS
const charities = require('./controllers/charities');
const donations = require('./controllers/donations');
const dashboard = require('./controllers/dashboard');
const home = require('./controllers/home');
const users = require('./controllers/users');




// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/charitable", {useNewUrlParser: true});




// SETTING UP VIEWS AND MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(charities);
app.use(donations);
app.use(dashboard);
app.use(home);
app.use(users);



// SERVER BOOTING UP
app.listen(port);
module.exports = app;
