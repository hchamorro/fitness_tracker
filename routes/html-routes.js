// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// const path = require("path");
const express = require('express');
const router = express.Router();
const checkAuth = require('./middleware/check-auth');
// Routes
// =============================================================
// module.exports = function(app) {
//   // index route loads view.html
//   app.get("/", function(req, res) {
//     res.render("index");
//   });
// };

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile', function(req, res) {
  res.render('profile');
});

// router.get('/home', checkAuth, function(req, res) {
//   res.render('home');
// });

router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;
