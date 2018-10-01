const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const http = require('http');
const app = express();

const home = require('./controllers/home');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(home);


app.listen(3000, function() {
  console.log('Server Listening on Port 3000');
});

module.exports = app;