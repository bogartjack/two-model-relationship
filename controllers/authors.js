const express = require('express');
const router  = express.Router();
// Models job is to communicate with the DB
const Author  = require('../models/authors');

router.get('/', (req, res) => {
  res.render('authors/index.ejs');
});

router.get('/new', (req, res) => {
  res.render('authors/new.ejs');
});



module.exports = router;