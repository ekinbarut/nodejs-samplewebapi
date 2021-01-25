require('dotenv').config({ path: '.env' });

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/Object'), 
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONN_STRING); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/objectRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Listening on: ' + port);