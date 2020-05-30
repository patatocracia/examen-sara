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



//middlewares




//cors




//rutas




//export

module.exports = app;
