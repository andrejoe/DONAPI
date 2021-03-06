

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));
/*
app.get('/', function(req, res){
  res.send("that works");
});
*/

// Start server
app.listen(3000);
console.log("running on port 3000");