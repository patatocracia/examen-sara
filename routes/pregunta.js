'use strict'

'use strict'

const express = require('express');
const PreguntaController = require('../controllers/pregunta');

var api = express.Router();

api.post('/register-pregunta', PreguntaController.savePregunta);
api.get('/get-preguntas', PreguntaController.getAllPreguntas);
api.get('/get-random', PreguntaController.getRandomPregunta);


module.exports = api;
