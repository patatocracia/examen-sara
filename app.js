'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

//configuraciones
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//cargar rutas
var pregunta_routes = require('./routes/pregunta');


//middlewares




//cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});



//rutas
app.use('/api', pregunta_routes);



//export

module.exports = app;
