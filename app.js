const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const http = require('http');
const app = express();



app.listen(3000, function() {
  console.log('Server Listening on Port 3000');
});
