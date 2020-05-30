'use strict'


const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PreguntaSchema = Schema({
  title: String,
  text: String,
  response: String
})


module.exports = mongoose.model('Pregunta', PreguntaSchema);
