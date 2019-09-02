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
        // seedDB                = require("./seeds"),
        // mongoose              = require("mongoose"),
        // bodyParser            = require("body-parser"),
        // Blog                  = require("./models/blog"),
        // passport              = require("passport"),
        // LocalStrategy         = require("passport-local").Strategy,
        // passportLocalMongoose = require("passport-local-mongoose"),
        // User                  = require("./models/user"),
        // Comment               = require("./models/comment");

        // mongoose.connect('mongodb://remote:remote19@ds349857.mlab.com:49857/remote_academy', {useNewUrlParser: true});
        mongoose.connect("mongodb://localhost/remote", {useNewUrlParser: true });
        mongoose.connection
          .once('open', () => console.log("MongoDB connected"))
          .on('error', (err)=>{
            console.log(`Could not connect`, err)
          })

          // mongoose.connect("mongodb://localhost/remote", {useNewUrlParser: true });
          // mongoose.connect("mongodb://remote_academy:samsocnotelcc%40%2419@ds349857.mlab.com:49857/remote_academy");
          // mongoose.connect("mongodb://etgehub:samsocnotelcc%40%2419@ds343127.mlab.com:43127/etgehub");

          // const db = require("./config/keys").mongoURI;
          // mongoose.connect(db, {useNewUrlParser: true})
          // .then(() => console.log("MongoDB connected"))
          // .catch((err)=> console.log(err));

          // db.once('open', function(){
          // console.log('Connected to db');
          // });
 
          // db.on('error', function(err){
          // console.log(err);
          // });

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


        app.use(express.static(publicDir));


        // const newUser = new User({
        //   firstName: "Cosmas", 
        //   lastName: "Udom", 
        //   email: "udomcosmas@gmail.com", 
        //   phone_number: "08039453998", 
        //   address: "adress", 
        //   course: "UI/UX"
        // });

        // newUser.save(function(err, savedUser){
        //   if(err) return err;

        //   console.log(savedUser);
        // });

        app.use('/', require('./routes/index'));
        app.use('/users', require('./routes/users'));


        // app.get("/registerdetails", function(req, res){
        //   var usersdetails = [
        //     {firstName: "Cosmas", lastName: "Udom", email: "udomcosmas@gmail.com", phone_number: "08039453998", address: "adress", interst: "i=UI/UX"},
        //     {firstName: "Cosmas", lastName: "Udom", email: "udomcosmas@gmail.com", phone_number: "08039453998", address: "adress", interst: "i=UI/UX"},
        //     {firstName: "Cosmas", lastName: "Udom", email: "udomcosmas@gmail.com", phone_number: "08039453998", address: "adress", interst: "i=UI/UX"}
        //   ]
        // })

        

        


        app.listen(process.env.PORT || 5550, function(){
            console.log("The Server has started at port 5550");
        });