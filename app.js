const express = require('express'); 
const path = require('path');
const rootDir = require('./util/path.js');
const bodyParser =require('body-parser');
const authRoutes = require('./routes/auth');
const errorControllers = require('./controllers/error');

const app=express();

app.use(bodyParser.json());  //we are dealing with json
app.use(bodyParser.urlencoded({extended : false})); //parsing the post request datas
app.use(express.static(path.join(rootDir,'public'))); //including public folder accesseible like css and other stuffs in public folder are now accessible
app.set('view engine','ejs');  //express ko batata hai hum by deafult kaun sa templating engine use kar rahe
app.set('views','views'); 


app.use(authRoutes);
app.use(errorControllers.get404);



app.listen(3000);
