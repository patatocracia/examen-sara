'use strict'


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = require('./app')


//connect mongodb y servidor

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/examen-sara', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
          console.log("La conexion a la base de datos cesfuencarral_web se ha realizado correctamente...");
          //crear servidor
          app.listen(process.env.PORT || 5000, ()=>{
          })
        })
        .catch(err => console.log(err));
