'use strict'


const Pregunta = require('../models/pregunta');


function savePregunta(req, res) {
  var params = req.body;
  var pregunta = new Pregunta();


  pregunta.title = params.title;
  pregunta.text = params.text;
  pregunta.response = toLowerCase(params.response);

  pregunta.save((err, preguntaStored) => {
    if (err) return res.status(500).send({
      message: 'error al guardar la pregunta'
    });
    if (!preguntaStored) return res.status(404).send({
      message: 'No se ha podido guardar'
    });
    if (preguntaStored) return res.status(200).send({
      pregunta: preguntaStored
    });
  });
}

function getAllPreguntas(req, res) {

  Pregunta.find((err, allPreguntas) => {
    if (err) return res.status(500).send({
      message: 'error al recuperar las preguntas'
    });
    if (!allPreguntas) return res.status(404).send({
      message: 'No se han podido encontrar las preguntas'
    });
    if (allPreguntas) return res.status(200).send({
      allPreguntas
    });
  }).sort('_id');
}

function getRandomPregunta(req, res) {

  Pregunta.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);

    Pregunta.findOne().skip(random).exec((err, pregunta)=>{
      return res.status(200).send({pregunta})
    });
  });


}

module.exports = {
  savePregunta,
  getAllPreguntas,
  getRandomPregunta
}
