
//Dependencies
var express = require('express');
var router = express.Router();

// Models

var Products = require('../models/product');


// Routes
Products.methods(['get', 'put', 'post', 'delete']);
Products.register(router, '/products');


/*
router.get('/products', function(req, res){
  res.send('api is working');
})
*/
// Return router
module.exports = router;