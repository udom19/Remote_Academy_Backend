var     express               = require("express"),
        app                   = express(),
        mongoose              = require("mongoose"),
        passport              = require("passport"),
        expressLayout         = require("express-ejs-layouts"),
        bodyParser            = require("body-parser"),
        passport              = require("passport"),
        flash                 = require("connect-flash"),
        session               = require("express-session"),
        LocalStrategy         = require("passport-local").Strategy,
        passportLocalMongoose = require("passport-local-mongoose"),
        User                  = require("./models/Users");
        Course                = require("./models/Courses");




mongoose.connect('mongodb://remote:remote19@ds215988.mlab.com:15988/remote_academy', {
// mongoose.connect('mongodb://localhost/remote', {
useNewUrlParser: true,
useCreateIndex: true
})
.then(() => {
console.log("DB connected succesfully")
})
.catch(err => {
console.log('An error occured when try to connect to Database', err)
});
// mongoose.connect("mongodb://localhost/remote", {useNewUrlParser: true });
// mongoose.connection
//   .once('open', () => console.log("MongoDB connected"))
//   .on('error', (err)=>{
//     console.log(`Could not connect`, err)
//   });

// Passport config
require("./config/passport")(passport);


var publicDir = require('path').join(__dirname,'/public');

app.use(expressLayout);
app.use(session({
secret: 'Capital of Nigeria',
resave: true,
saveUninitialized: true
}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session()); 
app.use(passport.initialize());
app.use(passport.session());

// Global Vars
app.use((req, res, next) =>{
res.locals.success_msg = req.flash("success_msg");
res.locals.error_msg = req.flash("error_msg");
res.locals.error = req.flash("error");
next();
});
// Public files
app.use(express.static(publicDir));



app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/course', require('./routes/course'));

app.listen(process.env.PORT || 5000, function(){
console.log("The Server has started at port 5500");
});
