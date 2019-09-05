const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Course = require("../models/Courses"); //Users model


router.get("/courses", (req, res) => {
    const courses = [
      {
      iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
      title: "HTML5",
      description: "Learn how to build responsive web pages using HTML5",
      price: "$50"
      },
      {
      iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
      title: "HTML5",
      description: "Learn how to build responsive web pages using HTML5",
      price: "$50"
      },
      {
      iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
      title: "HTML5",
      description: "Learn how to build responsive web pages using HTML5",
      price: "$50"
      }
    ];
    res.render("courses", {courses: courses});
  })

module.exports = router;