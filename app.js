const express = require('express'); 
const path = require('path');
const rootDir = require('./util/path.js');
const bodyParser =require('body-parser');
const errorControllers = require('./controllers/error');
const mongoose = require('mongoose');
const flash=require('connect-flash');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf= require('csurf');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');

const app=express();
const csrfProtection = csrf();

//Db connection
const MONGODB_URI=require('./config/keys').MongoURI; //db keys
mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
.then(()=>{
    console.log("Database Connection established");
})
.catch(err=>{
    console.log(err);
});

const store= new MongoDBStore({
  uri:MONGODB_URI,
  collection:'sessions',
});

app.use(bodyParser.json());  //we are dealing with json
app.use(bodyParser.urlencoded({extended : false})); //parsing the post request datas
app.use(express.static(path.join(rootDir,'public'))); //including public folder accesseible like css and other stuffs in public folder are now accessible
app.set('view engine','ejs');  //express ko batata hai hum by deafult kaun sa templating engine use kar rahe
app.set('views','views'); 

//express session middlewares
app.use(
    session({
      secret: 'secret', //used to sign the hashed
      resave: false,
      saveUninitialized: false,
      store:store,
      // cookie: {
      //   maxAge: 1000*60 // 1 min
      // },
      
    })
  );

  app.use(csrfProtection);
  app.use(flash());


// Global variables -> saare views mai hum es variables ko use kar skte hai
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
  });



app.use(authRoutes);
app.use(indexRoutes);
app.use(errorControllers.get404);



app.listen(3000);
