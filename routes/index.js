const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const Cart = require("../models/Cart");
=======
>>>>>>> 713aa8d394a220175a3ef057d2528bd5ea964aa6
const { ensureAuthenticated } = require("../config/auth");

// Landing route
router.get('/', (req, res) => res.render('landing'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
<<<<<<< HEAD
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    email: req.user.email
}));

router.get("/courses", (req, res) => {
    // Get all courses from Db
    Course.find({}, (err, allCourses) => {
        if(err){
            console.log(err)
        }else{
            res.render("courses", {courses: allCourses})
        }
    })
    // res.render("courses", {courses: courses});
  })

  router.post("/courses", (req,res) => {
    //   Get data from form and add to courses array
        const iconPath = req.body.iconPath;
        const title = req.body.title;
        const video = req.body.video;
        const description = req.body.description;
        const price = req.body.price;

        const newCourse = { iconPath: iconPath, title: title, description: description, price: price, video: video}
        // Create a new course and send it to DB
        Course.create(newCourse, (err, newlyCreatedCourse) => {
            if(err){
                console.log(err)
            }else{
                // Redirect back to courses page.
        res.redirect("/courses");
            }
        })

    
  });

  router.get("/courses/new", (req, res) => {
      res.render("new");
  });

  router.get("/courses/:id", ensureAuthenticated, (req, res) => {
    //   Find the course with provided id
    Course.findById(req.params.id, (err, foundCourse) => {
        if(err){
            console.log(err)
        }else{
            res.render("single-course", {
                course: foundCourse,
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                email: req.user.email
            });
        }
    })
  });

//   router.get("/courses/add-to-cart/:id", (req, res) => {
//       const courseId = req.params.id;
//       const cart = new Cart(req.session.cart ? req.session.cart : {})

//       Course.findById(courseId, (err, course) => {
//           if(err){
//               return res.redirect("checkout");
//           }
//           cart.add(course, course.id);
//           req.session.cart = cart;
//           console.log(req.session.cart);
//           res.redirect("checkout")
//       })
//   });

//   router.get("/courses/:id/checkout", (req, res) => {
//       res.render("single-course");
//   })



=======
    firstname: req.user.firstname
}));

>>>>>>> 713aa8d394a220175a3ef057d2528bd5ea964aa6
module.exports = router;