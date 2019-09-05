const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/Users"); //Users model

// Login route
router.get('/login', (req, res) => res.render('login'));

// Register route
router.get('/register', (req, res) => res.render('register'));

<<<<<<< HEAD
// Post course Route
router.get('/course', (req, res) => res.render('new'));

// Add to Cart
router.get('/course/add-to-cart', (req, res) => res.render('add-to-cart'));

=======
>>>>>>> 713aa8d394a220175a3ef057d2528bd5ea964aa6
// Register handle
router.post('/register', (req, res) =>{
    const { firstname, lastname, email, password, password2, phonenumber, course, address } = req.body;
    let errors = [];    
    // Check required Fields
    if(!firstname || !lastname || !email || !password || !password2 || !phonenumber || !course || !address){
        errors.push({ msg: "Please fill in all fields" });
    }

    // Check password Match
    if(password !== password2) {
        errors.push({ msg: "Password do not match" });
    }

    // Check Password length
    if(password.length < 6 ) {
        errors.push({msg: "Password should be at least 6 characters"});
    }

    if(errors.length > 0 ) {
        res.render("register", {
            errors,
            firstname,
            lastname,
            email,
            password,
            password2,
            phonenumber,
            course,
            address
            });

    }else{
        // Validation Passed
        User.findOne({ email: email})
        .then(user => {
            if(user) {
                // User exist
                errors.push({msg: "Email is already registered"})
                res.render("register", {
                    errors,
                    firstname,
                    lastname,
                    email,
                    password,
                    password2,
                    phonenumber,
                    course,
                    address
                });
            }else{
                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password,
                    phonenumber,
                    course,
                    address
                });
                // Hash Password
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if(err) throw err;
                    // Set password to hash
                    newUser.password = hash;
                    // Save User
                    newUser.save()
                    .then(user => {
                        req.flash("success_msg", "You are now registered and can log in");
                        res.redirect('/users/login');
                    })
                    .catch(err => console.log(err));
                }))
            }
        })
    }
});

// Login Handle
router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
<<<<<<< HEAD
        successRedirect: "/dashboard",
=======
        successRedirect: "/",
>>>>>>> 713aa8d394a220175a3ef057d2528bd5ea964aa6
        failureRedirect: "/users/login",
        failureFlash: true
    })(req, res, next);
})

// Logout Handle
router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/users/login");
})

module.exports = router;