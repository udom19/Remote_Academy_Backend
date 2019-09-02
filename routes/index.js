const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Landing route
router.get('/', (req, res) => res.render('landing'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    firstname: req.user.firstname
}));

module.exports = router;