if(!process.env.PORT){
  require('dotenv').config();
}

// NEEDED EXTERNAL MODULES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const http = require('http');
const app = express();

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost/charitable', {useNewUrlParser: true});

// PATH TO THE ROUTES
const home = require('./controllers/home');
const charities = require('./controllers/charities');


// SETTING UP VIEWS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(home);
app.use(charities);

// SERVER STARTING
app.listen(3000, function() {
  console.log('Server Listening on Port 3000');
});

module.exports = app;