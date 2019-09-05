const Course = require("../models/Courses");
const mongoose = require("mongoose");

// mongoose.connect('mongodb://remote:remote19@ds215988.mlab.com:15988/remote_academy', {
//     useNewUrlParser: true,
//     useCreateIndex: true
//   })
mongoose.connect("mongodb://localhost/remote_course", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(() => {
      console.log("DB connected succesfully")
    })
    .catch(err => {
      console.log('An error occured when try to connect to Database', err)
    });


    const courses = [
        new Course({
        iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
        title: "HTML5",
        description: "Learn how to build responsive web pages using HTML5",
        price: "$50"
        }),
        new Course({
        iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
        title: "HTML5",
        description: "Learn how to build responsive web pages using HTML5",
        price: "$50"
        }),
        new Course({
        iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
        title: "HTML5",
        description: "Learn how to build responsive web pages using HTML5",
        price: "$50"
        }),
        new Course({
        iconPath: "http://simpleicon.com/wp-content/uploads/rocket.png",
        title: "HTML5",
        description: "Learn how to build responsive web pages using HTML5",
        price: "$50"
        }),

    ];

    let done = 0;
    for(var i = 0; i < courses.length; i++){
        courses[i].save(function(err, result) {
            done++;
            if(done === courses.length){
                exit();
            }
            console.log(result);
        });
        
    }

function exit() {
    mongoose.disconnect();
}
    