'use strict'


const Pregunta = require('../models/pregunta');


function savePregunta(req, res) {
  var params = req.body;
  var pregunta = new Pregunta();


pregunta.title = params.title;
pregunta.text = params.text;
pregunta.response = params.response;

pregunta.save((err,preguntaStored)=>{
  if (err) return res.status(500).send({message: 'error al guardar la pregunta'});
  if (!preguntaStored) return res.status(404).send({message: 'No se ha podido guardar'});
  if(preguntaStored) return res.status(200).send({pregunta: preguntaStored});
});
}

module.exports = {
  savePregunta
}
