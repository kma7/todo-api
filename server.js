'use strict'

const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  Task = require('./api/models/todoListModel'),
  app = express(),
  port = process.env.PORT || 3000

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
